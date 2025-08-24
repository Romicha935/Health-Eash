import React from "react";
import contactImg from "../assets/img/contactImg.png"; 
const ContactUs = () => {
  return (
    <section className="max-w-6xl mx-auto mt-20 px-6 py-4">
      <h1 className="text-4xl font-bold text-center pb-10">Contact <span className="text-primary">Us</span></h1>
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="md:w-1/2">
          <img
            src={contactImg}
            alt="Contact Us"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Text */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-primary mb-4">Our Office</h2>
          <p className="text-gray-700 text-lg">
           24/A, Banani, Dhaka, Bangladesh<br />
            Suite 201, Dhaka, Bangladesh 
          </p>
          <p className="text-gray-700 text-lg">Tel: (+880) 1234-567899</p>
          <p className="text-gray-700 text-lg">Email: healthease@gmail.com</p>

          <h3 className="text-3xl font-semibold text-primary mt-6">Careers at Prescripto</h3>
          <p className="text-gray-700 text-lg">
            Learn more about our teams and job openings.
          </p>
          <button className="mt-4 px-6 py-3 bg-primary text-white rounded hover:bg-green-600 transition">
            Explore Jobs
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
