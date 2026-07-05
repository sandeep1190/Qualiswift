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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // TODO:
    // API Integration
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
              <label className="block mb-2 font-medium">
                Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-[#0B3C91]"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Company
              </label>

              <input
                type="text"
                name="company"
                placeholder="Acme Corp"
                value={formData.company}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-[#0B3C91]"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="john@acme.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-[#0B3C91]"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Phone
              </label>

              <input
                type="tel"
                name="phone"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-[#0B3C91]"
              />
            </div>

          </div>

          <div>
            <label className="block mb-2 font-medium">
              Country
            </label>

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
            <label className="block mb-2 font-medium">
              Message
            </label>

            <textarea
              rows={5}
              name="message"
              placeholder="Tell us about your current testing stack..."
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-[#0B3C91]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-[#0B3C91] py-4 font-semibold text-white transition hover:bg-blue-900"
          >
            Request Demo
          </button>

        </form>

      </div>
    </section>
  );
};

export default Contact;