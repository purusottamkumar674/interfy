const data = [
  {
    title: "Grow your business",
    desc: "We believe in challenges and so we have made challenges.",
    img: "/src/assets/Grow.png",
  },
  {
    title: "Cost savings ideas",
    desc: "We also help our clients with social media strategy.",
    img: "/src/assets/cost.png",
  },
  {
    title: "Boost performance",
    desc: "We deliver email marketing campaigns to your audience.",
    img: "/src/assets/Boost .png",
  },
];

const BusinessSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {data.map((item, index) => (
            <div
              key={index}
              className="group flex items-start gap-5 p-6 border rounded-xl cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* LEFT IMAGE */}
              <div className="w-16 h-16 flex-shrink-0 overflow-hidden">
                <img
                  src={item.img}
                  alt="icon"
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* TEXT */}
              <div>
                <h1 className="text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
                  {item.title}
                </h1>

                <p className="mt-2 text-gray-600 text-sm leading-relaxed transition-all duration-300 group-hover:text-gray-800">
                  {item.desc}
                </p>

                {/* Hover Line Effect */}
                <span className="block mt-3 h-[2px] w-0 bg-blue-600 transition-all duration-500 group-hover:w-full"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
