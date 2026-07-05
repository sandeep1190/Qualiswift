import {
  FaAws,
  FaMicrosoft,
  FaGoogle,
  FaSalesforce,
} from "react-icons/fa";
import { SiAtlassian } from "react-icons/si";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative pt-24 pb-32 px-6 overflow-hidden flex flex-col items-center text-center bg-[radial-gradient(circle_at_top_center,rgba(0,191,166,0.05)_0%,rgba(248,250,252,1)_50%)]"
    >
      <div className="max-w-5xl mx-auto relative z-10">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-500 text-sm font-medium mb-8 border border-emerald-500/20">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 animate-ping"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>

          Beyond Automation. Into Intelligence.
        </div>

        {/* Heading */}

        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-8">
          The Leading{" "}
          <span className="bg-gradient-to-r from-blue-900 to-emerald-500 bg-clip-text">
            Enterprise AI
          </span>
          <br />
          Test Engineering Platform
        </h1>

        {/* Description */}

        <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed mb-10">
          Transform User Stories, Jira Test Cases, Figma Designs,
          Source Code, Existing Automation Frameworks and
          Recordings into enterprise-ready automation using AI.
        </p>

        {/* Buttons */}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

          <a
            href="#demo"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-blue-900 text-white text-lg font-medium hover:bg-blue-800 transition duration-300 shadow-lg"
          >
            Request Live Demo
          </a>

          <a
            href="#assessment"
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-gray-300 bg-white text-slate-700 text-lg font-medium hover:border-blue-900 hover:text-blue-900 transition duration-300"
          >
            Book AI Assessment
          </a>

        </div>
      </div>

      {/* Trusted Companies */}

      <div className="mt-24 w-full max-w-6xl border-t border-gray-200 pt-10">

        <p className="text-xs uppercase tracking-[3px] text-slate-500 font-semibold mb-8">
          Trusted by innovative and AI-Native companies
        </p>

        <div className="flex flex-wrap justify-center gap-12 text-5xl text-gray-400 hover:text-gray-700 transition">

          <FaAws />

          <FaMicrosoft />

          <FaGoogle />

          <FaSalesforce />

          <SiAtlassian />

        </div>
      </div>
    </section>
  );
};

export default Hero;