import React from "react";
import aboutImg from "../assets/img/aboutImage.jpg"; 

const AboutUs = () => {
  const cards = [
    {
      title: "Efficiency",
      description: "Streamlined appointment scheduling that fits into your busy lifestyle.",
    },
    {
      title: "Convenience",
      description: "Access to a network of trusted healthcare professionals in your area.",
    },
    {
      title: "Personalization",
      description: "Tailored recommendations and reminders to help you stay on top of your health.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto mt-20 px-6 py-12">
      {/* About Us Section */}
      <div className="flex flex-col md:flex-row items-center mb-16 gap-10">
        {/* Left Text */}
       <div className="md:w-1/2">
          <img src={aboutImg} alt="About Us" className="w-full h-auto rounded-lg shadow-lg" />
        </div>

        {/* Right text */}
        
         <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-primary mb-6">About Us</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Welcome to <span className="font-semibold text-primary">Health Ease</span>, your trusted partner in managing your healthcare needs conveniently and efficiently. We understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Health Ease is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service.
          </p>
          <h3 className="text-3xl font-semibold text-primary mt-6 mb-3">Our Vision</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our vision at Health Ease is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
          </p>
        </div>
      </div>

      {/* Why Choose Us Cards Section */}
      <div>
        <h1 className="text-2xl font-bold uppercase">Why Choose us</h1>
      <div className=" grid grid-cols-1 md:grid-cols-3 p-5">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white  hover:bg-primary hover:text-white  shadow-lg rounded-lg p-9"
          >
            <h4 className="text-2xl font-bold  mb-3">{card.title}</h4>
            <p className=" mt-4  text-lg">{card.description}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default AboutUs;
