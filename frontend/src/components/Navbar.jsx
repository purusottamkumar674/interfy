import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Training", path: "/training" },
  { name: "Staffing", path: "/staffing" },
  { name: "Career", path: "/career" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  const baseLink = "transition-all duration-300 hover:text-blue-400 relative group";
  const activeLink = "text-blue-500 font-semibold";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
  <img
    src="/src/assets/logo1.png"
    alt="logo"
    className="h-16 md:h-20 w-auto object-contain"
  />
</div>


          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-1 xl:gap-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm xl:text-base font-medium rounded-full ${baseLink} ${
                      isActive ? activeLink : scrolled ? "text-gray-700" : "text-white"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.name}
                      <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full ${isActive ? 'w-full' : ''}`}></span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
              scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-500 lg:hidden ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-transform duration-500 ease-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 border-b">
            <img src="/src/assets/logo1.png" alt="logo" className="h-12 w-auto" />
          </div>
          
          <ul className="flex-1 overflow-y-auto py-6 px-4">
            {navItems.map((item, index) => (
              <li 
                key={item.name}
                className="mb-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <NavLink
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700 hover:bg-gray-50 hover:pl-6"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="p-6 border-t bg-gray-50">
            <p className="text-sm text-gray-600 text-center">
              © 2026 Your Company. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;