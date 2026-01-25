import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import "./components/Footer"

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Training from "./pages/Training";
import Staffing from "./pages/Staffing";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

// Yahan maine components ko uncomment kar diya hai
 import CloudService from "./pages/CloudService";
import WebService from "./pages/WebService";
import APIService from "./pages/APIService";
import BackendService from "./pages/BackendService"; 
import CallFloat from "./components/CallFloat";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // ✅ 3 SECONDS (Jaisa aapne likha hai)

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return<Loader />;
  }

  return (
    <>
      <Navbar />
      <div className="relative">
      <CallFloat />
    </div>

       <div className="relative">
      

      {/* WhatsApp Floating Icon */}
      <WhatsAppFloat />
    </div>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/training" element={<Training />} />
        <Route path="/staffing" element={<Staffing />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />

     


        {/* ✅ Specific Service Routes (Learn More functionality) */}
        <Route path="/cloudservice" element={<CloudService />} />
        <Route path="/webservice" element={<WebService />} />
        <Route path="/apiservice" element={<APIService />} />
        <Route path="/backendservice" element={<BackendService />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;