import {
  FaWandMagicSparkles,
  FaDatabase,
  FaCodeCompare,
  FaRotate,
  FaVial,
  FaGlobe,
  FaTruckFast,
  FaMicroscope,
  FaHeartPulse,
} from "react-icons/fa6";

const capabilities = [
  {
    icon: <FaWandMagicSparkles />,
    title: "AI Automation Gen",
    description:
      "Instantly generate structured test code from natural language or visual inputs.",
  },
  {
    icon: <FaDatabase />,
    title: "Repository Intelligence",
    description:
      "Analyzes existing repos to match your exact coding standards and patterns.",
  },
  {
    icon: <FaCodeCompare />,
    title: "Source Code Intel",
    description:
      "Understands app source code to generate precise locators and API payloads.",
  },
  {
    icon: <FaRotate />,
    title: "Incremental Updates",
    description:
      "Smart diffs automatically update tests when UI or APIs change.",
  },
  {
    icon: <FaVial />,
    title: "Test Data Intel",
    description:
      "Generates robust, context-aware synthetic data for complex edge cases.",
  },
  {
    icon: <FaGlobe />,
    title: "Multi-Environment",
    description:
      "Seamlessly execute across staging, UAT, and prod across different regions.",
  },
  {
    icon: <FaTruckFast />,
    title: "CI/CD Native",
    description:
      "Deep hooks into GitHub Actions, GitLab, Jenkins and more.",
  },
  {
    icon: <FaMicroscope />,
    title: "AI Failure Analysis",
    badge: "Roadmap",
    description:
      "Automatically categorizes failures and suggests root cause fixes.",
  },
  {
    icon: <FaHeartPulse />,
    title: "AI Self-Healing",
    badge: "Roadmap",
    description:
      "Tests dynamically adapt to minor UI shifts without human intervention.",
  },
];

const Capabilities = () => {
  return (
    <section id="capabilities" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="heading-font text-3xl md:text-4xl font-bold mb-4">
            Enterprise Capabilities
          </h2>

          <p className="body-text text-slate-500 max-w-2xl mx-auto">
            Comprehensive features built for complex engineering organizations.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {capabilities.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >

              <div className="flex items-start justify-between mb-4">

                <div className="text-2xl text-blue-900 transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>

                {item.badge && (
                  <span className="text-[10px] uppercase font-bold bg-gray-100 text-gray-500 px-2 py-1 rounded">
                    {item.badge}
                  </span>
                )}

              </div>

              <h3 className="heading-font text-xl font-semibold text-slate-900 mb-3">
                {item.title}
              </h3>

              <p className="body-text text-slate-500">
                {item.description}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Capabilities;