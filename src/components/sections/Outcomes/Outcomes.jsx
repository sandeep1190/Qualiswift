import { FaBolt, FaShieldHalved, FaRocket } from "react-icons/fa6";

const outcomes = [
  {
    icon: <FaBolt />,
    title: "10x Faster Automation",
    description: "Reduce sprint lag to zero.",
  },
  {
    icon: <FaShieldHalved />,
    title: "80% Lower Maintenance",
    description: "Eliminate flakiness and rework.",
  },
  {
    icon: <FaRocket />,
    title: "Faster Releases",
    description: "Deploy with absolute confidence.",
  },
];

const Outcomes = () => {
  return (
    <section
      id="outcomes"
      className="relative overflow-hidden bg-[#0B3C91] py-24 px-6 text-white"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>

            <h2 className="heading-font text-3xl md:text-5xl font-bold mb-6 white-color">
              Measurable Impact
            </h2>

            <p className="body-text text-blue-200 text-lg mb-10 leading-relaxed">
              Stop counting test cases. Start measuring velocity.
              Qualiswift shifts the focus from writing scripts to
              delivering quality at speed.
            </p>

            <div className="space-y-6">

              {outcomes.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-400/20 flex items-center justify-center text-emerald-400 text-xl shrink-0">
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="heading-font text-lg font-bold">
                      {item.title}
                    </h4>

                    <p className="body-text text-blue-200 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}

            </div>

          </div>

          {/* Right Chart */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8">

            <div className="h-64 flex items-end justify-between gap-4 pt-10">

              {/* Before Productivity */}
              <div className="w-1/4 h-[20%] bg-white/20 rounded-t-lg relative group">
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition">
                  Before
                </span>
              </div>

              {/* Productivity */}
              <div className="w-1/4 h-[80%] bg-emerald-400 rounded-t-lg shadow-[0_0_20px_rgba(0,191,166,.45)] relative">
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-semibold whitespace-nowrap">
                  Productivity
                </span>
              </div>

              {/* Before Maintenance */}
              <div className="w-1/4 h-[90%] bg-white/20 rounded-t-lg relative group">
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition">
                  Before
                </span>
              </div>

              {/* Maintenance */}
              <div className="w-1/4 h-[15%] bg-emerald-400 rounded-t-lg shadow-[0_0_20px_rgba(0,191,166,.45)] relative">
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-semibold whitespace-nowrap">
                  Maintenance
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Outcomes;