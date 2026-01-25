import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ================= API SERVICES DATA ================= */
const apiServicesData = [
  {
    title: "REST API Development",
    desc: "Robust and scalable RESTful APIs for web and mobile applications.",
    icon: "🔗",
  },
  {
    title: "GraphQL API Development",
    desc: "Flexible and high-performance GraphQL APIs for modern applications.",
    icon: "📊",
  },
  {
    title: "Third-Party API Integration",
    desc: "Seamless integration with payment, SMS, email, and external services.",
    icon: "🔌",
  },
  {
    title: "API Security",
    desc: "Secure APIs with authentication, authorization, JWT, and OAuth.",
    icon: "🔐",
  },
  {
    title: "Microservices Architecture",
    desc: "Design and development of scalable microservices-based systems.",
    icon: "🧩",
  },
  {
    title: "API Testing & Documentation",
    desc: "Well-documented APIs with testing using Postman, Swagger, and automation.",
    icon: "🧪",
  },
];

/* ================= API SERVICE PAGE ================= */
const APIService = () => {
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
      {/* ================= HERO API SERVICE SECTION ================= */}
      <section
        ref={sectionRef}
        className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518779578993-ec3579fee39f')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1
            className={`text-4xl md:text-6xl font-extrabold mb-6 transition-all duration-1000 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-blue-400">API</span>{" "}
            <span className="text-white">Development</span>{" "}
            <span className="text-pink-400">Services</span>
          </h1>

          <p
            className={`text-lg md:text-xl text-gray-200 mb-10 transition-all duration-1000 delay-200 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          >
            Secure, scalable, and high-performance APIs powering modern digital
            applications.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="px-12 py-5 text-lg font-bold rounded-full text-white
            bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
            hover:from-green-500 hover:via-teal-500 hover:to-indigo-500
            transition-all duration-500 hover:scale-110 hover:shadow-2xl"
          >
            Get API Services
          </button>
        </div>
      </section>

      {/* ================= API SERVICES GRID ================= */}
      <section className="relative py-24 bg-gradient-to-br from-sky-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Our API Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We build powerful APIs that ensure seamless communication
              between systems and applications.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {apiServicesData.map((service, index) => (
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
          Power Your Applications with APIs
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-10">
          Let our experts design and build secure APIs that scale with your
          business.
        </p>

        <button
          onClick={() => navigate("/contact")}
          className="px-14 py-5 text-lg font-bold text-white rounded-full
          bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
          hover:scale-110 transition-all duration-500 shadow-2xl"
        >
          Talk to API Expert
        </button>
      </section>
    </>
  );
};

export default APIService;
