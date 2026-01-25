import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const staffingServices = [
  {
    title: "IT Staffing",
    desc: "Skilled frontend, backend, full-stack, and DevOps professionals for your business needs.",
    icon: "💻",
  },
  {
    title: "Contract Staffing",
    desc: "Flexible contract-based hiring solutions to scale your team quickly and efficiently.",
    icon: "📄",
  },
  {
    title: "Permanent Staffing",
    desc: "End-to-end recruitment solutions to hire full-time professionals who fit your culture.",
    icon: "🏢",
  },
  {
    title: "Remote Staffing",
    desc: "Hire top remote talent globally with complete technical and HR support.",
    icon: "🌍",
  },
  {
    title: "Technical Screening",
    desc: "Expert-level screening, interviews, and skill validation to ensure quality hiring.",
    icon: "🧪",
  },
  {
    title: "Payroll & HR Support",
    desc: "Complete payroll management, compliance, and HR support for hired resources.",
    icon: "🧾",
  },
];

const Staffing = () => {
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
      {/* ================= HERO STAFFING SECTION ================= */}
      <section
        ref={sectionRef}
        className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('/src/assets/staffing.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1
            className={`text-4xl md:text-6xl font-extrabold mb-6 transition-all duration-1000 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-blue-400">Smart</span>{" "}
            <span className="text-white">Staffing</span>{" "}
            <span className="text-pink-400">Solutions</span>
          </h1>

          <p
            className={`text-lg md:text-xl text-gray-200 mb-10 transition-all duration-1000 delay-200 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          >
            Connecting businesses with the right talent to drive growth,
            performance, and innovation.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="px-12 py-5 text-lg font-bold rounded-full text-white
            bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
            hover:from-green-500 hover:via-teal-500 hover:to-indigo-500
            transition-all duration-500 hover:scale-110 hover:shadow-2xl"
          >
            Hire Talent Now
          </button>
        </div>
      </section>

      {/* ================= STAFFING SERVICES ================= */}
      <section className="relative py-24 bg-gradient-to-br from-sky-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Our Staffing Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We provide flexible and reliable staffing solutions tailored to
              your business requirements.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {staffingServices.map((service, index) => (
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

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-slate-900 py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-white mb-6">
            Why Choose Our Staffing?
          </h2>
          <p className="text-slate-400 mb-16 max-w-3xl mx-auto">
            We focus on speed, quality, and long-term partnerships to deliver
            the best talent solutions.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
            {[
              "Pre-Vetted Talent",
              "Fast Hiring Process",
              "Flexible Engagement",
              "Dedicated Support",
            ].map((point, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-xl p-8 text-white hover:bg-slate-700 transition"
              >
                <h3 className="text-lg font-semibold">{point}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 text-center px-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
          Build Your Dream Team with Us
        </h2>
        <p className="text-white/90 max-w-2xl mx-auto mb-10">
          Let us help you find the right talent quickly and efficiently.
        </p>

        <button
          onClick={() => navigate("/contact")}
          className="px-14 py-5 text-lg font-bold bg-white text-blue-600 rounded-full
          hover:bg-gray-100 transition-all duration-500 hover:scale-110 shadow-2xl"
        >
          Contact Us
        </button>
      </section>
    </>
  );
};

export default Staffing;
