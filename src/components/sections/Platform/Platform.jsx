import {
  FaFileLines,
  FaCode,
  FaArrowRightLong,
  FaBrain,
  FaPlay,
  FaServer,
  FaMobileScreen,
  FaChartPie,
} from "react-icons/fa6";

import { FaJira, FaFigma } from "react-icons/fa";

const inputs = [
  {
    icon: <FaFileLines className="text-blue-500" />,
    title: "User Story",
  },
  {
    icon: <FaJira className="text-blue-600" />,
    title: "Jira Test Cases",
  },
  {
    icon: <FaFigma className="text-pink-500" />,
    title: "Figma Designs",
  },
  {
    icon: <FaCode className="text-gray-700" />,
    title: "Source Code",
  },
];

const outputs = [
  {
    icon: <FaPlay className="text-green-500" />,
    title: "Playwright Tests",
  },
  {
    icon: <FaServer className="text-purple-500" />,
    title: "API Tests",
  },
  {
    icon: <FaMobileScreen className="text-orange-500" />,
    title: "Mobile Tests",
  },
  {
    icon: <FaChartPie className="text-emerald-500" />,
    title: "Intelligent Reports",
  },
];

const Platform = () => {
  return (
    <section
      id="platform"
      className="py-24 px-6 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">
          <h2 className="heading-font text-3xl md:text-4xl font-bold mb-4">
            Interactive Platform Architecture
          </h2>

          <p className="body-text max-w-2xl mx-auto text-slate-500">
            A seamless pipeline from concept to continuous validation.
          </p>
        </div>

        {/* Architecture */}

        <div className="relative">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

            {/* Left */}

            <div className="w-full lg:w-1/4 flex flex-col gap-4">

              {inputs.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-gray-200 shadow-sm hover:border-blue-900 transition-all"
                >
                  <div className="text-lg">
                    {item.icon}
                  </div>

                  <span className="font-medium">
                    {item.title}
                  </span>
                </div>
              ))}

            </div>

            {/* Arrow */}

            <div className="text-blue-900 opacity-40 text-3xl rotate-90 lg:rotate-0">
              <FaArrowRightLong />
            </div>

            {/* Center */}

            <div className="w-full lg:w-1/3">

              <div className="bg-gradient-to-br from-primary to-blue-800 p-8 rounded-3xl shadow-xl text-center text-white relative overflow-hidden group hover:scale-105 transition-transform duration-500">

                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                <FaBrain className="text-6xl text-emerald-400 mx-auto mb-5" />

                <h3 className="heading-font text-2xl font-bold mb-2">
                  Qualiswift AI Engine
                </h3>

                <p className="text-blue-100">
                  Repository Intelligence & Chat
                </p>

              </div>

            </div>

            {/* Arrow */}

            <div className="text-blue-900 opacity-40 text-3xl rotate-90 lg:rotate-0">
              <FaArrowRightLong />
            </div>

            {/* Right */}

            <div className="w-full lg:w-1/4 flex flex-col gap-4">

              {outputs.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-gray-200 shadow-sm hover:border-emerald-500 transition-all"
                >
                  <div className="text-lg">
                    {item.icon}
                  </div>

                  <span className="font-medium">
                    {item.title}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Platform;