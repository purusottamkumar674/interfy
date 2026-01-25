import { useEffect, useState } from "react";

const Loader = () => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 3000); // loader time

    return () => clearTimeout(timer);
  }, []);

  if (hide) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <div className="text-center">
        {/* LOGO */}
        <div className="w-24 h-24 mx-auto mb-6 rounded-full border-4 border-white flex items-center justify-center animate-spin-slow">
          <img
            src="/src/assets/logo2.png"
            alt="Company Logo"
            className="w-12 h-12 animate-pulse"
          />
        </div>

        {/* COMPANY NAME */}
        <h1 className="text-white text-3xl md:text-4xl font-extrabold tracking-widest animate-fade-in">
          YOUR COMPANY
        </h1>

        {/* TAGLINE */}
        <p className="text-white/70 mt-3 animate-slide-up">
          Crafting Digital Experiences
        </p>

        {/* LOADING BAR */}
        <div className="mt-8 w-64 h-1 bg-white/20 overflow-hidden rounded">
          <div className="h-full w-full bg-white animate-loader-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
