import { FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-gray-900 text-gray-300 py-12 px-6 border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto">

        {/* Top Footer */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Logo */}

          <div className="md:col-span-2">

            <div className="flex items-center gap-2 mb-6">

              <div className="w-8 h-8 rounded bg-[#0B3C91] flex items-center justify-center text-white font-bold">
                Q
              </div>

              <span className="heading-font text-2xl font-bold text-white">
                Qualiswift
              </span>

            </div>

            <p className="body-text text-gray-400 max-w-md leading-7">
              Enterprise AI Test Engineering Platform. Beyond Automation.
              Into Intelligence. Transforming the way QA teams build,
              maintain and scale automation.
            </p>

          </div>

          {/* Platform */}

          <div>

            <h4 className="heading-font text-lg font-semibold text-white mb-5">
              Platform
            </h4>

            <ul className="space-y-3 body-text">

              <li>
                <a
                  href="#capabilities"
                  className="hover:text-[#00BFA6] transition"
                >
                  Capabilities
                </a>
              </li>

              <li>
                <a
                  href="#platform"
                  className="hover:text-[#00BFA6] transition"
                >
                  Integrations
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-[#00BFA6] transition"
                >
                  Security
                </a>
              </li>

              <li>
                <a
                  href="#assessment"
                  className="hover:text-[#00BFA6] transition"
                >
                  AI Assessment
                </a>
              </li>

            </ul>

          </div>

          {/* Company */}

          <div>

            <h4 className="heading-font text-lg font-semibold text-white mb-5">
              Company
            </h4>

            <ul className="space-y-3 body-text">

              <li>
                <a href="#" className="hover:text-[#00BFA6] transition">
                  About
                </a>
              </li>

              <li>
                <a href="#demo" className="hover:text-[#00BFA6] transition">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-[#00BFA6] transition">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-[#00BFA6] transition">
                  Terms of Service
                </a>
              </li>

            </ul>

          </div>

        </div>

        {/* Bottom Footer */}

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="body-text text-gray-500 text-sm">
            © {new Date().getFullYear()} Qualiswift. All rights reserved.
          </p>

          <div className="flex items-center gap-5">

            <a
              href="#"
              className="text-gray-400 hover:text-white transition text-xl"
            >
              <FaLinkedin />
            </a>

            <a
              href="#"
              className="text-gray-400 hover:text-white transition text-xl"
            >
              <FaYoutube />
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;