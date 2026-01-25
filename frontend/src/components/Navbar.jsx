import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const baseLink =
    "transition-colors duration-300 hover:text-gray-400";
  const activeLink = "text-blue-600 font-semibold";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div
          className={`text-2xl font-bold tracking-wide ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          <div className="">
              <img
            src="/src/assets/logo1.png"
            alt="logo"
            className="h-[70px] w-10px"
          />
          </div>
         

        </div>

        {/* Desktop Menu */}
        <ul
          className={`hidden lg:flex gap-8 items-center font-medium ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `${baseLink} ${isActive ? activeLink : ""}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden text-3xl ${
            scrolled ? "text-black" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-screen" : "max-h-0"
        } bg-white`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4 font-medium text-black">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `border-b pb-2 ${
                  isActive ? "text-blue-600 font-semibold" : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
