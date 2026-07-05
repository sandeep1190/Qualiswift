import { FaClock, FaScrewdriverWrench, FaCodeBranch } from "react-icons/fa6";

const challenges = [
  {
    icon: <FaClock />,
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    title: "Slow Script Creation",
    description:
      "Manual scripting takes weeks, delaying release cycles and holding back innovation.",
  },
  {
    icon: <FaScrewdriverWrench />,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    title: "High Maintenance Overhead",
    description:
      "Minor UI changes break hundreds of tests, creating an endless cycle of technical debt.",
  },
  {
    icon: <FaCodeBranch />,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    title: "Siloed Knowledge",
    description:
      "Disconnect between user stories, design, and actual test implementation.",
  },
];

const Challenges = () => {
  return (
    <section id="challenges" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
            The Complexity of Modern QA
          </h2>

          <p className="text-text-muted max-w-2xl mx-auto">
            Traditional automation struggles to keep pace with rapid development
            cycles.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {challenges.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 border border-gray-100 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-6 ${item.iconBg} ${item.iconColor}`}
              >
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {item.title}
              </h3>

              <p className="text-slate-500 leading-7">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Challenges;