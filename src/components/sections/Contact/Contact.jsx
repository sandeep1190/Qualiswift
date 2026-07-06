import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "United States",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.company.trim()) newErrors.company = "Company is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validate()) return;

  setLoading(true);
  setSuccess(false);

  const data = {
    access_key: "fa5ce974-631c-425e-879f-b0d68902e6a9",
    subject: "New Demo Request - Qualiswift",
    from_name: formData.name,
    name: formData.name,
    company: formData.company,
    email: formData.email,
    phone: formData.phone,
    country: formData.country,
    message: formData.message,
  };

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (result.success) {
      setSuccess(true);

      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        country: "United States",
        message: "",
      });

      setErrors({});
    } else {
      alert(result.message);
      console.log(result);
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong. Please try again.");
  }

  setLoading(false);
};

  return (
    <section id="demo" className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="heading-font text-3xl md:text-5xl font-bold mb-6">
          Ready to transcend automation?
        </h2>

        <p className="body-text text-slate-500 text-lg">
          Experience how Qualiswift can transform your QA engineering.
        </p>
      </div>

      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium">Name</label>

              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-[#0B3C91]"
              />

              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block mb-2 font-medium">Company</label>

              <input
                type="text"
                name="company"
                placeholder="Acme Corp"
                value={formData.company}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-[#0B3C91]"
              />

              {errors.company && (
                <p className="text-red-500 text-sm mt-1">{errors.company}</p>
              )}
            </div>

            <div>
              <label className="block mb-2 font-medium">Email</label>

              <input
                type="email"
                name="email"
                placeholder="john@acme.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-[#0B3C91]"
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block mb-2 font-medium">Phone</label>

              <input
                type="tel"
                name="phone"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-[#0B3C91]"
              />

              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block mb-2 font-medium">Country</label>

            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-[#0B3C91]"
            >
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Canada</option>
              <option>India</option>
              <option>Australia</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">Message</label>

            <textarea
              rows={5}
              name="message"
              placeholder="Tell us about your current testing stack..."
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-[#0B3C91]"
            />

            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-[#0B3C91] py-4 font-semibold text-white transition hover:bg-blue-900 disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Request Demo"}
          </button>

          {success && (
            <div className="mt-4 rounded-lg bg-green-100 border border-green-300 text-green-700 p-4 text-center">
              ✅ Thank you! Your request has been submitted successfully.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;