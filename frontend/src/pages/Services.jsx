import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const servicesData = [
  {
    title: "Web Development",
    desc: "Modern, scalable, and high-performance websites using React, Next.js, and Tailwind CSS.",
    icon: "🌐",
  },
  {
    title: "UI / UX Design",
    desc: "User-focused designs with clean layouts, smooth animations, and intuitive experiences.",
    icon: "🎨",
  },
  {
    title: "Frontend Development",
    desc: "Component-based frontend development with clean, reusable, and maintainable code.",
    icon: "⚛️",
  },
  {
    title: "Backend Development",
    desc: "Secure and scalable backend solutions using Node.js, Express, and MongoDB.",
    icon: "🛠️",
  },
  {
    title: "API Integration",
    desc: "Seamless REST API and third-party integrations for powerful applications.",
    icon: "🔗",
  },
  {
    title: "Maintenance & Support",
    desc: "Continuous support, bug fixes, performance optimization, and feature updates.",
    icon: "🚀",
  },
];

const Services = () => {
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
      {/* ================= HERO SERVICES SECTION ================= */}
      <section
        ref={sectionRef}
        className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('/src/assets/service.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1
            className={`text-4xl md:text-6xl font-extrabold mb-6 transition-all duration-1000 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-blue-400">Our</span>{" "}
            <span className="text-white">Professional</span>{" "}
            <span className="text-pink-400">Services</span>
          </h1>

          <p
            className={`text-lg md:text-xl text-gray-200 mb-10 transition-all duration-1000 delay-200 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          >
            We deliver end-to-end digital solutions that help businesses grow
            faster and smarter.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="px-12 py-5 text-lg font-bold rounded-full text-white
            bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
            hover:from-green-500 hover:via-teal-500 hover:to-indigo-500
            transition-all duration-500 hover:scale-110 hover:shadow-2xl"
          >
            Get Our Services
          </button>
        </div>
      </section>

      {/* ================= SERVICES GRID SECTION ================= */}
      <section className="relative py-24 bg-gradient-to-br from-sky-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              What We Offer
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our services are designed to deliver high-quality digital products
              with performance, security, and scalability in mind.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {servicesData.map((service, index) => (
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

      {/* ================= CTA SECTION ================= */}
      <section className="bg-slate-900 py-20 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
          Ready to Start Your Project?
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-10">
          Let’s build something amazing together. Contact us today and turn
          your ideas into reality.
        </p>

        <button
          onClick={() => navigate("/contact")}
          className="px-14 py-5 text-lg font-bold text-white rounded-full
          bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
          hover:from-green-500 hover:via-teal-500 hover:to-indigo-500
          transition-all duration-500 hover:scale-110 shadow-2xl"
        >
          Contact Us
        </button>
      </section>
    </>
  );
};

export default Services;
