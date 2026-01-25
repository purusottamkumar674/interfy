import { useEffect, useRef, useState } from "react";

const Contact = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

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
      {/* ================= HERO CONTACT SECTION ================= */}
      <section
        ref={sectionRef}
        className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('/src/assets/contact.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1
            className={`text-4xl md:text-6xl font-extrabold mb-6 transition-all duration-1000 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-blue-400">Get In</span>{" "}
            <span className="text-white">Touch</span>{" "}
            <span className="text-pink-400">With Us</span>
          </h1>

          <p
            className={`text-lg md:text-xl text-gray-200 mb-10 transition-all duration-1000 delay-200 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          >
            Have a project in mind or need our services?  
            We’d love to hear from you.
          </p>
        </div>
      </section>

      {/* ================= CONTACT FORM SECTION ================= */}
      <section className="relative py-24 bg-gradient-to-br from-sky-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Info */}
            <div
              className={`transition-all duration-1000 ${
                visible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-16"
              }`}
            >
              <h2 className="text-4xl font-extrabold mb-6">
                Let’s Talk About Your Project
              </h2>
              <p className="text-gray-600 mb-10">
                Reach out to us for web development, training, staffing, or
                career opportunities. Our team will respond as soon as possible.
              </p>

              <div className="space-y-4 text-gray-700">
                <p>📍 Location: India</p>
                <p>📧 Email: info@yourcompany.com</p>
                <p>📞 Phone: +91 98765 43210</p>
              </div>
            </div>

            {/* Right Form */}
            <form
              className={`bg-white rounded-2xl p-10 shadow-2xl transition-all duration-1000 ${
                visible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-16"
              }`}
            >
              <div className="mb-6">
                <label className="block mb-2 font-semibold">Full Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 font-semibold">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 font-semibold">Message</label>
                <textarea
                  rows="5"
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 text-lg font-bold text-white rounded-full
                bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                hover:from-green-500 hover:via-teal-500 hover:to-indigo-500
                transition-all duration-500 hover:scale-105 shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 text-center px-6 bg-slate-900">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
          Let’s Build Something Amazing
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-10">
          We’re always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>
      </section>
    </>
  );
};

export default Contact;
