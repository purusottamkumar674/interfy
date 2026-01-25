import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const CreativeSection = () => {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/src/assets/background.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* LEFT TEXT */}
        <h1
          className={`text-white text-4xl md:text-6xl font-extrabold mb-4 transition-all duration-1000 ${
            show ? "translate-x-0 opacity-100" : "-translate-x-32 opacity-0"
          }`}
        >
          We make the creative
        </h1>

        {/* RIGHT TEXT */}
        <h1
          className={`text-white text-4xl md:text-6xl font-extrabold mb-10 transition-all duration-1000 delay-200 ${
            show ? "translate-x-0 opacity-100" : "translate-x-32 opacity-0"
          }`}
        >
          solutions for business!
        </h1>

        {/* BUTTON */}
        <button
          onClick={() => navigate("/contact")}
          className="
            px-12 py-5
            text-lg font-bold text-white
            rounded-full
            bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-yellow-500
            hover:from-green-500 hover:via-teal-500 hover:via-indigo-500 hover:to-purple-600
            transition-all duration-500
            hover:scale-110
            shadow-2xl
          "
        >
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default CreativeSection;
