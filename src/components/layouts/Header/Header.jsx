import logo from "../../../assets/logo.png";

const Header = () => {
  return (
    <header
      id="header"
      className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2 logo">
           <img src={logo} alt="Logo" />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
          <a href="#platform" className="hover:text-blue-900 transition-colors">
            Platform
          </a>

          <a href="#capabilities" className="hover:text-blue-900 transition-colors">
            Capabilities
          </a>

          <a href="#outcomes" className="hover:text-blue-900 transition-colors">
            Outcomes
          </a>

          <a href="#industries" className="hover:text-blue-900 transition-colors">
            Industries
          </a>
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-4">

          <a
            href="#demo"
            className="px-5 py-2.5 bg-blue-900 text-white text-sm font-medium rounded-full hover:bg-blue-800 transition-all shadow-md"
          >
            Book Demo
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;