import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ================= WEB SERVICES DATA ================= */
const webServicesData = [
  {
    title: "Website Development",
    desc: "Modern, responsive, and high-performance websites tailored to your business needs.",
    icon: "🌐",
  },
  {
    title: "Frontend Development",
    desc: "Interactive UI development using React, Tailwind CSS, and modern JavaScript frameworks.",
    icon: "⚛️",
  },
  {
    title: "Backend Development",
    desc: "Secure and scalable backend solutions using Node.js, Express, and REST APIs.",
    icon: "🛠️",
  },
  {
    title: "Full Stack Development",
    desc: "End-to-end full stack web solutions using MERN stack and best industry practices.",
    icon: "🚀",
  },
  {
    title: "E-Commerce Solutions",
    desc: "Custom e-commerce platforms with payment gateway, cart, and order management.",
    icon: "🛒",
  },
  {
    title: "Website Maintenance",
    desc: "Ongoing support, performance optimization, security updates, and feature enhancements.",
    icon: "🔧",
  },
];

/* ================= WEB SERVICE PAGE ================= */
const WebService = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ================= HERO WEB SERVICE SECTION ================= */}
      <section
        ref={sectionRef}
        className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1
            className={`text-4xl md:text-6xl font-extrabold mb-6 transition-all duration-1000 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-blue-400">Web</span>{" "}
            <span className="text-white">Development</span>{" "}
            <span className="text-pink-400">Services</span>
          </h1>

          <p
            className={`text-lg md:text-xl text-gray-200 mb-10 transition-all duration-1000 delay-200 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          >
            Powerful, scalable, and user-friendly web solutions built with
            modern technologies.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="px-12 py-5 text-lg font-bold rounded-full text-white
            bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
            hover:from-green-500 hover:via-teal-500 hover:to-indigo-500
            transition-all duration-500 hover:scale-110 hover:shadow-2xl"
          >
            Get Web Services
          </button>
        </div>
      </section>

      {/* ================= WEB SERVICES GRID ================= */}
      <section className="relative py-24 bg-gradient-to-br from-sky-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Our Web Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We create web solutions that deliver performance, security,
              scalability, and business growth.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {webServicesData.map((service, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl
                transition-all duration-700 hover:-translate-y-3
                ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 text-center px-6 bg-slate-900">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
          Build Your Website With Experts
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-10">
          Let’s turn your ideas into a powerful digital presence with our
          professional web development services.
        </p>

        <button
          onClick={() => navigate("/contact")}
          className="px-14 py-5 text-lg font-bold text-white rounded-full
          bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
          hover:scale-110 transition-all duration-500 shadow-2xl"
        >
          Talk to Web Expert
        </button>
      </section>
    </>
  );
};

export default WebService;
