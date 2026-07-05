import {
  FaBuildingColumns,
  FaCoins,
  FaTowerCell,
  FaShield,
  FaStore,
  FaHeartPulse,
  FaIndustry,
  FaLaptopCode,
} from "react-icons/fa6";

const industries = [
  {
    title: "Banking",
    icon: <FaBuildingColumns />,
  },
  {
    title: "BFSI",
    icon: <FaCoins />,
  },
  {
    title: "Telecom",
    icon: <FaTowerCell />,
  },
  {
    title: "Insurance",
    icon: <FaShield />,
  },
  {
    title: "Retail",
    icon: <FaStore />,
  },
  {
    title: "Healthcare",
    icon: <FaHeartPulse />,
  },
  {
    title: "Manufacturing",
    icon: <FaIndustry />,
  },
  {
    title: "Product Engineering",
    icon: <FaLaptopCode />,
  },
];

const Industries = () => {
  return (
    <section id="industries" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">

          <h2 className="heading-font text-3xl md:text-4xl font-bold mb-4">
            Built for Complex Domains
          </h2>

          <p className="body-text max-w-2xl mx-auto text-slate-500">
            Pre-trained models that understand the specific compliance and
            logic requirements of your industry.
          </p>

        </div>

        {/* Industry Pills */}

        <div className="flex flex-wrap justify-center gap-4">

          {industries.map((item, index) => (
            <div
              key={index}
              className="group cursor-pointer flex items-center gap-3 rounded-full border border-gray-200 bg-white px-6 py-4 transition-all duration-300 hover:border-[#0B3C91] hover:bg-slate-50 hover:shadow-md"
            >
              <span className="text-[#0B3C91] text-lg transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </span>

              <span className="font-medium text-slate-800">
                {item.title}
              </span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Industries;