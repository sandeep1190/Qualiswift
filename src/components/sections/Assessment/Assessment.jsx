import { FaArrowRight, FaCheck } from "react-icons/fa6";

const deliverables = [
  "QA Maturity Assessment",
  "Framework Review",
  "Repository Analysis",
  "AI Readiness Score",
  "ROI Projection",
  "Custom POC",
  "Implementation Roadmap",
];

const Assessment = () => {
  return (
    <section
      id="assessment"
      className="py-24 px-6 bg-slate-50 border-y border-gray-200"
    >
      <div className="max-w-5xl mx-auto">

        <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xl flex flex-col md:flex-row">

          {/* Left Side */}

          <div className="w-full md:w-2/5 bg-gradient-to-br from-[#0B3C91] to-blue-900 text-white p-10 flex flex-col">

            <h3 className="heading-font text-3xl font-bold mb-4">
              AI Test Engineering Assessment
            </h3>

            <p className="body-text text-blue-200 mb-8 leading-relaxed">
              A focused 2–3 week engagement to map your journey to
              intelligent automation.
            </p>

            <a
              href="#demo"
              className="mt-auto inline-flex items-center gap-2 text-[#00BFA6] font-semibold hover:text-white transition"
            >
              Book Assessment
              <FaArrowRight />
            </a>

          </div>

          {/* Right Side */}

          <div className="w-full md:w-3/5 p-10">

            <h4 className="heading-font text-2xl font-bold mb-8">
              Deliverables Included
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              {deliverables.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <FaCheck className="text-[#00BFA6]" />

                  <span className="body-text text-slate-700">
                    {item}
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

export default Assessment;