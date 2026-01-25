import { useState } from "react";

// import your images
import img1 from "/src/assets/wipro.png";
import img2 from "/src/assets/waste.png";
import img3 from "/src/assets/birla.png";
import img4 from "/src/assets/niit.png";
import img5 from "/src/assets/fiserv.png";

const images = [img1, img2, img3, img4, img5];

const ImageHoverSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-10">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="tech"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              className={`
                w-24 md:w-28 lg:w-32
                object-contain
                cursor-pointer
                transition-all duration-300
                ${
                  activeIndex !== null && activeIndex !== index
                    ? "opacity-30"
                    : "opacity-100"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageHoverSection;
