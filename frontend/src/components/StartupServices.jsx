import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCloudMeatball } from "react-icons/fa6";
import { ArrowRight, ChevronLeft, ChevronRight, Cloud, Code, Database, Globe } from 'lucide-react';

const ServicesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      title: "Startup Cloud Solutions",
      description: "Secure, scalable, and reliable cloud infrastructure tailored for Startup needs. Includes migration, optimization, and 24/7 support.",
      points: ["Responsive Web Design", "API Integration", "Robust Back-end Architecture", "Cloud Migration"],
      icon: <Cloud className="w-10 h-10 text-blue-500" />,
      link: "/CloudService"
    },
    {
      title: "Custom Web App",
      description: "Building high-performance web applications using the latest tech stack like MERN for your business growth.",
      points: ["React Development", "Node.js Backend", "Next.js SEO", "Redux State Management"],
      icon: <Code className="w-10 h-10 text-blue-500" />,
      link: "webservice"
    },
    {
      title: "Full Stack Systems",
      description: "End-to-end development focusing on scalability and user experience for modern startup ecosystems.",
      points: ["Database Design", "System Security", "UI/UX Optimization", "DevOps Setup"],
      icon: <Database className="w-10 h-10 text-blue-500" />,
      link: "Backendservice"
    },

     {
      title: "Cloud",
      description: "End-to-end development focusing on scalability and user experience for modern startup ecosystems.",
      points: ["Database Design", "System Security", "UI/UX Optimization", "DevOps Setup"],
      icon: <FaCloudMeatball className="w-10 h-10 text-blue-500" />,
      link: "cloudservice"
    },

    {
      title: "Global Infrastructure",
      description: "Scale your business globally with our specialized international server management and deployment.",
      points: ["Global CDN", "Multi-region Hosting", "Data Privacy", "Auto-scaling"],
      icon: <Globe className="w-10 h-10 text-blue-500" />,
      link: "apiservice"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 >= services.length - 2 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - 3 : prev - 1));
  };

  return (
    <section className="py-20 bg-white px-6 md:px-20 overflow-hidden">
      {/* --- Header Section (Center) --- */}
      <div className="text-center mb-16 space-y-4 animate-fade-in">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-semibold animate-bounce hover:bg-blue-700 transition">
          Our Services
        </button>
        <h2 className="block text-4xl md:text-5xl font-bold text-gray-900">
          Startup Solutions Portfolio
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
          Comprehensive technology solutions designed to drive Startup growth, efficiency, and innovation.
        </p>
      </div>

      {/* --- Slider Container --- */}
      <div className="relative group">
        {/* Left/Right Arrows */}
        <button onClick={prevSlide} className="absolute left-[-50px] top-1/2 -translate-y-1/2 bg-gray-100 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-all z-30 hidden md:block shadow-lg">
          <ChevronLeft size={30} />
        </button>
        <button onClick={nextSlide} className="absolute right-[-50px] top-1/2 -translate-y-1/2 bg-gray-100 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-all z-30 hidden md:block shadow-lg">
          <ChevronRight size={30} />
        </button>

        {/* --- Cards Grid --- */}
        <div className="flex gap-6 transition-transform duration-500 ease-in-out" 
             style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}>
          {services.map((item, index) => (
            <div key={index} className="min-w-full md:min-w-[calc(33.33%-1rem)] border border-gray-100 bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="mb-6">{item.icon}</div>
              <h4 className="text-2xl font-bold mb-4 text-gray-800">{item.title}</h4>
              <p className="text-gray-500 mb-6 leading-relaxed text-sm">
                {item.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {item.points.map((point, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    {point}
                  </li>
                ))}
              </ul>

              {/* Learn More Box with Animation */}
              <Link to={item.link} className="inline-flex items-center gap-3 border-2 border-gray-200 px-6 py-3 rounded-lg font-bold text-gray-700 group-hover:border-blue-500 group-hover:text-blue-600 transition-all duration-300">
                Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSlider;