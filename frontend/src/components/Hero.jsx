import React, { useEffect, useRef } from "react";
import { Mail, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import bgImage from "../assets/bg.png";
import heroVideo from "../assets/video.mp4";

const Hero = () => {
  const navigate = useNavigate();

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const btnRef = useRef([]);
  const videoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(headingRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          textRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6"
        )
        .from(
          btnRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          videoRef.current,
          {
            scale: 0.85,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.8"
        );

      // Floating animation
      gsap.to(videoRef.current, {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Mouse 3D tilt effect
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 30;
    const y = (clientY / window.innerHeight - 0.5) * 30;

    gsap.to(videoRef.current, {
      rotationY: x,
      rotationX: -y,
      transformPerspective: 800,
      transformOrigin: "center",
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center text-white bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Glow Background Blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600/20 blur-3xl rounded-full animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

          {/* LEFT CONTENT */}
          <div>
            <h1
              ref={headingRef}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                We build powerful modern websites.
              </span>
            </h1>

            <p
              ref={textRef}
              className="mt-6 text-sm sm:text-base md:text-lg text-gray-300 max-w-lg"
            >
              We create fast, responsive and professional websites that help
              businesses grow online and build a strong digital presence.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                ref={(el) => (btnRef.current[0] = el)}
                onClick={() => navigate("/contact")}
                className="cursor-pointer flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-full font-semibold hover:scale-110 hover:shadow-2xl transition-all duration-300"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                ref={(el) => (btnRef.current[1] = el)}
                onClick={() => navigate("/contact")}
                className="cursor-pointer flex items-center justify-center gap-2 border border-white/40 px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black hover:shadow-xl transition-all duration-300"
              >
                Contact Us
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* RIGHT VIDEO */}
          <div className="flex justify-center lg:justify-end perspective-1000">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl object-cover border border-white/20 backdrop-blur-md transition-transform duration-300"
            >
              <source src={heroVideo} type="video/mp4" />
            </video>
          </div>

        </div>
      </div>

      {/* Gradient Animation Style */}
      <style>
        {`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .animate-gradient {
            background-size: 200% 200%;
            animation: gradientMove 6s ease infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
