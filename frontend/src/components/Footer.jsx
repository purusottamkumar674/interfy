import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, ArrowRight } from 'lucide-react';

const Footer = () => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, color: 'hover:bg-blue-600', href: '#' },
    { icon: <Instagram size={20} />, color: 'hover:bg-pink-600', href: '#' },
    { icon: <Twitter size={20} />, color: 'hover:bg-sky-400', href: '#' },
    { icon: <Linkedin size={20} />, color: 'hover:bg-blue-700', href: '#' },
  ];

  return (
    <footer className="relative bg-[#0b1120] text-slate-300 pt-20 pb-10 overflow-hidden">
      {/* Animated Background Blur */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white tracking-tighter">
              <img src="/src/assets/logo1.png" alt="" />
             
            </h2>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Building the future of the web with modern UI/UX and high-performance React components.
            </p>
          </div>

          {/* Dynamic Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6 uppercase tracking-wider">Navigation</h4>
            <ul className="grid grid-cols-2 gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="flex items-center group hover:text-cyan-400 transition-colors duration-300"
                  >
                    <ArrowRight size={14} className="mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Presence */}
          <div className="flex flex-col items-md-end">
            <h4 className="text-white font-semibold text-lg mb-6 uppercase tracking-wider">Connect With Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-12 h-12 flex items-center justify-center rounded-full bg-slate-800/50 border border-slate-700 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(34,211,238,0.2)] ${social.color} hover:text-white`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2026 DesignLab. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-cyan-400">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;