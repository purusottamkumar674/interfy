import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ================= FAQ ITEM COMPONENT ================= */
const FAQItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className="bg-slate-800 rounded-xl p-6 cursor-pointer transition hover:bg-slate-700"
    >
      <div className="flex justify-between items-center">
        <h4 className="text-lg font-semibold text-white">
          {item.q}
        </h4>
        <span className="text-2xl text-indigo-400">
          {open ? "−" : "+"}
        </span>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ${
          open ? "max-h-40 mt-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-slate-300 leading-relaxed">
          {item.a}
        </p>
      </div>
    </div>
  );
};

/* ================= ABOUT PAGE ================= */
const About = () => {
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ================= HERO ABOUT SECTION ================= */}
      <section
        ref={sectionRef}
        className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('/src/assets/about.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1
            className={`text-4xl md:text-6xl font-extrabold mb-4 transition-all duration-1000 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-blue-400">We Build</span>{" "}
            <span className="text-white">Powerful Digital</span>
          </h1>

          <h2
            className={`text-3xl md:text-5xl font-extrabold mb-8 transition-all duration-1000 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-pink-400">Experiences</span>{" "}
            <span className="text-yellow-400">That Matter</span>
          </h2>

          <button
            onClick={() => navigate("/contact")}
            className={`px-12 py-5 text-lg font-bold rounded-full text-white
            bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
            transition-all duration-500 hover:scale-110 hover:shadow-2xl
            ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Know More About Us
          </button>
        </div>
      </section>

      {/* ================= DETAILED ABOUT SECTION ================= */}
      <section className="relative overflow-hidden py-24 bg-gradient-to-br from-sky-50 via-white to-blue-50">
        <div className="relative max-w-7xl mx-auto px-6">
          <h1 className="text-center text-4xl md:text-5xl font-extrabold mb-6">
            We Build Digital Experiences That Drive Growth
          </h1>

          <p className="text-center max-w-3xl mx-auto text-gray-600 text-lg mb-20">
            We are a technology-driven company focused on building scalable,
            secure, and innovative digital solutions.
          </p>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              {[
                {
                  title: "Our Mission",
                  desc: "To empower startups and enterprises with scalable digital solutions.",
                },
                {
                  title: "Our Vision",
                  desc: "To become a trusted technology partner worldwide.",
                },
                {
                  title: "Our Values",
                  desc: "Innovation, transparency, collaboration, and quality.",
                },
              ].map((item, index) => (
                <div key={index}>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            <img
              src="/src/assets/about-1.png"
              alt="Technology"
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="bg-slate-900 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center text-white mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-slate-400 mb-14">
            Quick answers to common queries
          </p>

          <div className="space-y-5">
            {[
              {
                q: "What technologies do you use for development?",
                a: "We use React, Tailwind CSS, JavaScript, Node.js, and modern tools."
              },
              {
                q: "Do you build responsive websites?",
                a: "Yes, all websites are mobile-first and fully responsive."
              },
              {
                q: "How do you ensure code quality?",
                a: "We follow clean code practices, reusable components, and testing."
              },
              {
                q: "Can you create custom web applications?",
                a: "Yes, we build custom applications tailored to business needs."
              },
              {
                q: "Do you provide support after delivery?",
                a: "Yes, we offer maintenance, bug fixes, and performance optimization."
              }
            ].map((item, index) => (
              <FAQItem key={index} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
