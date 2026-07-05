import { FaCheckCircle } from "react-icons/fa";

const features = [
  "Native integration with your existing toolchain",
  "Generates standard Playwright/API code—no vendor lock-in",
  "Enterprise-grade security and compliance",
];

const Introducing = () => {
  return (
    <section id="introducing" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <span className="text-blue-900 font-semibold tracking-widest uppercase text-sm mb-3 block">
            Introducing
          </span>

          <h2 className="heading-font text-3xl md:text-5xl font-bold leading-tight mb-6">
            Intelligence that scales with your enterprise
          </h2>

          <p className="text-lg text-slate-500 leading-relaxed mb-8">
            Qualiswift isn't just another automation tool. It's a cognitive
            engine that understands your product's context, translating human
            intent directly into robust, maintainable code.
          </p>

          <ul className="space-y-5">
            {features.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <FaCheckCircle className="text-emerald-500 text-xl mt-1 flex-shrink-0" />

                <span className="text-slate-700 text-lg">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-900/20 to-emerald-500/20 blur-3xl"></div>

          <div className="relative bg-white p-2 rounded-3xl shadow-2xl border border-gray-100">
            <img
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_211e40f1b4_6420dc3b9b197273.png"
              alt="AI Testing Platform"
              className="w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introducing;