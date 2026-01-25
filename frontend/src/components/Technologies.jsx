import { useState } from "react";

import aws from "../assets/aws.png";
import supabase from "../assets/superbaised.png";
import nodejs from "../assets/nodejs.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import coder from "../assets/coder.png";
import docker from "../assets/docker.png";
import panda from "../assets/panda.png";

const techImages = [
  { img: aws, color: "#FF9900" },      // AWS orange
  { img: supabase, color: "#3ECF8E" }, // Supabase green
  { img: nodejs, color: "#68A063" },   // Node green
  { img: react, color: "#61DAFB" },    // React blue
  { img: node, color: "#3C873A" },     // Node dark green
  { img: coder, color: "#6366F1" },    // Indigo
  { img: docker, color: "#2496ED" },   // Docker blue
  { img: panda, color: "#22C55E" },    // Green
];

const Technologies = () => {
  const [paused, setPaused] = useState(false);

  return (
    <section className="py-24 bg-sky-50 overflow-hidden">
      <h2 className="text-center text-3xl md:text-4xl font-extrabold text-sky-600 mb-14 animate-fade-in">
        Technologies We Work With
      </h2>

      <div className="w-full overflow-hidden">
        <div
          className={`flex gap-20 w-max items-center ${
            paused ? "" : "animate-marquee"
          }`}
        >
          {[...techImages, ...techImages].map((item, index) => (
            <img
              key={index}
              src={item.img}
              alt="technology"
              onClick={() => setPaused(!paused)}
              style={{
                filter: `drop-shadow(0 0 18px ${item.color})`,
              }}
              className="
                w-20 md:w-24 lg:w-28
                object-contain
                cursor-pointer
                transition-transform duration-500
                hover:scale-125
              "
            />
          ))}
        </div>
      </div>

      <p className="text-center text-sm text-gray-400 mt-8 animate-pulse">
        Click on any logo to pause / resume
      </p>
    </section>
  );
};

export default Technologies;
