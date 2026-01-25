import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const trainingData = [
  {
    title: "Frontend Development Training",
    desc: "Learn HTML, CSS, JavaScript, React, Tailwind CSS with real-world projects and best practices.",
    icon: "💻",
  },
  {
    title: "React.js Training",
    desc: "Master React fundamentals, hooks, routing, state management, and build production-ready apps.",
    icon: "⚛️",
  },
  {
    title: "Full Stack Development",
    desc: "End-to-end MERN stack training with live projects, APIs, authentication, and deployment.",
    icon: "🌐",
  },
  {
    title: "UI / UX Design Training",
    desc: "Learn modern UI/UX principles, wireframing, prototyping, and responsive design techniques.",
    icon: "🎨",
  },
  {
    title: "Backend Development",
    desc: "Node.js, Express, MongoDB, REST APIs, security, and performance optimization training.",
    icon: "🛠️",
  },
  {
    title: "Interview & Placement Prep",
    desc: "Mock interviews, resume building, coding challenges, and real interview questions.",
    icon: "🎯",
  },
];

const Training = () => {
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
      {/* ================= HERO TRAINING SECTION ================= */}
      <section
        ref={sectionRef}
        className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('/src/assets/traning.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1
            className={`text-4xl md:text-6xl font-extrabold mb-6 transition-all duration-1000 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-blue-400">Professional</span>{" "}
            <span className="text-white">Training</span>{" "}
            <span className="text-pink-400">Programs</span>
          </h1>

          <p
            className={`text-lg md:text-xl text-gray-200 mb-10 transition-all duration-1000 delay-200 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          >
            Industry-focused training programs designed to make you job-ready
            with real-world skills.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="px-12 py-5 text-lg font-bold rounded-full text-white
            bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
            hover:from-green-500 hover:via-teal-500 hover:to-indigo-500
            transition-all duration-500 hover:scale-110 hover:shadow-2xl"
          >
            Enroll Now
          </button>
        </div>
      </section>

      {/* ================= TRAINING PROGRAMS ================= */}
      <section className="relative py-24 bg-gradient-to-br from-sky-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Our Training Programs
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Learn from experienced mentors with hands-on projects and
              practical knowledge.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {trainingData.map((item, index) => (
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
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
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
            Why Choose Our Training?
          </h2>
          <p className="text-slate-400 mb-16 max-w-3xl mx-auto">
            We focus on practical learning, real projects, and industry
            standards to help you succeed.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
            {[
              "Live Projects",
              "Expert Mentors",
              "Career Guidance",
              "Certification",
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
          Start Your Career with Us
        </h2>
        <p className="text-white/90 max-w-2xl mx-auto mb-10">
          Join our training programs and become industry-ready with confidence.
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

export default Training;
