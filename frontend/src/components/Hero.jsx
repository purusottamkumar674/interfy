import React from 'react';
import { Mail } from 'lucide-react';
const Hero = () => {
  return (
    <header className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src="/src/assets/video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl">
            <h1 className="text-white text-4xl md:text-6xl font-extrabold">
              We craft unique business ideas.
            </h1>

            <h3 className="text-white/80 mt-6 text-lg">
              We're a fully dedicated corporate service agency collaborating with
              brands all over the world.
            </h3>

                      <button
  onClick={() => navigate("/contact")}
  className="mt-8 flex items-center gap-3 border border-white px-8 py-3 text-white transition hover:bg-white hover:text-black"
>
  Contact Us
  <Mail className="w-5 h-5 transition-colors group-hover:text-black" />
</button>


          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
