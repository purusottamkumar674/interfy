import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const jobOpenings = [
  {
    title: "Frontend Developer (React)",
    location: "Remote / Hybrid",
    experience: "0–2 Years",
    type: "Full Time",
  },
  {
    title: "Backend Developer (Node.js)",
    location: "Onsite / Remote",
    experience: "1–3 Years",
    type: "Full Time",
  },
  {
    title: "UI / UX Designer",
    location: "Remote",
    experience: "0–2 Years",
    type: "Contract",
  },
  {
    title: "Full Stack Developer (MERN)",
    location: "Hybrid",
    experience: "2–4 Years",
    type: "Full Time",
  },
];

const Career = () => {
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
      {/* ================= HERO CAREER SECTION ================= */}
      <section
        ref={sectionRef}
        className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('/src/assets/Career.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1
            className={`text-4xl md:text-6xl font-extrabold mb-6 transition-all duration-1000 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-blue-400">Build</span>{" "}
            <span className="text-white">Your Career</span>{" "}
            <span className="text-pink-400">With Us</span>
          </h1>

          <p
            className={`text-lg md:text-xl text-gray-200 mb-10 transition-all duration-1000 delay-200 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          >
            Join our growing team and work on exciting projects with modern
            technologies.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="px-12 py-5 text-lg font-bold rounded-full text-white
            bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
            hover:from-green-500 hover:via-teal-500 hover:to-indigo-500
            transition-all duration-500 hover:scale-110 hover:shadow-2xl"
          >
            Apply Now
          </button>
        </div>
      </section>

      {/* ================= WHY WORK WITH US ================= */}
      <section className="relative py-24 bg-gradient-to-br from-sky-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Why Work With Us?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We offer a collaborative environment, learning opportunities,
              and a chance to grow your career.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              "Learning & Growth",
              "Flexible Work Culture",
              "Modern Tech Stack",
              "Supportive Team",
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-xl text-center
                transition-all duration-700 hover:-translate-y-3
                ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <h3 className="text-lg font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= JOB OPENINGS ================= */}
      <section className="bg-slate-900 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center text-white mb-14">
            Current Openings
          </h2>

          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6 hover:bg-slate-700 transition"
              >
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {job.title}
                  </h3>
                  <p className="text-slate-400">
                    {job.location} • {job.experience} • {job.type}
                  </p>
                </div>

                <button
                  onClick={() => navigate("/contact")}
                  className="px-8 py-3 font-semibold text-white rounded-full
                  bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                  hover:scale-105 transition"
                >
                  Apply
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 text-center px-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
          Ready to Grow With Us?
        </h2>
        <p className="text-white/90 max-w-2xl mx-auto mb-10">
          Take the next step in your career and join a team that values
          innovation and growth.
        </p>

        <button
          onClick={() => navigate("/contact")}
          className="px-14 py-5 text-lg font-bold bg-white text-blue-600 rounded-full
          hover:bg-gray-100 transition-all duration-500 hover:scale-110 shadow-2xl"
        >
          Contact HR
        </button>
      </section>
    </>
  );
};

export default Career;
