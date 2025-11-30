import React from "react";
import { toast } from "react-hot-toast";

const ContactSection = () => {
  const handleclick = (e) => {
    e.preventDefault();
    toast.success("Email is sent Successfully!");
  };

  return (
    <div className="bg-base-200 py-16 px-5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        {/* Contact Info */}
        <div className="bg-white shadow-xl rounded-2xl p-8">
          <h2 className="text-4xl font-bold mb-4  text-orange-500">
            Contact Us
          </h2>
          <p className="mb-6 text-black">
            Have questions or need help? We&apos;re here for you!
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-blue-600 text-2xl">📞</span>
              <p className="text-gray-700">+880 1706027955</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-blue-600 text-2xl">📧</span>
              <p className="text-gray-700">nur.cnits@gmail.com</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-blue-600 text-2xl">📍</span>
              <p className="text-gray-700">Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-xl rounded-2xl p-8 mt-5 sm:mt-0">
          <h3 className="text-2xl font-semibold mb-5 text-gray-800">
            Send us a Message
          </h3>

          <form className="space-y-4" onSubmit={handleclick}>
            <div>
              <label className="block mb-1 text-gray-600 font-medium">
                Your Name
              </label>
              <input
                type="text"
                className="w-full p-3 border border-black rounded-lg focus:outline-none focus:ring focus:ring-blue-300 text-black placeholder-black"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-600 font-medium">
                Your Email
              </label>
              <input
                type="email"
                className="w-full p-3 border border-black rounded-lg focus:outline-none focus:ring focus:ring-blue-300 text-black placeholder-black"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-600 font-medium">
                Message
              </label>
              <textarea
                className="w-full p-3 border border-black rounded-lg h-32 focus:outline-none focus:ring focus:ring-blue-300 text-black placeholder-black"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full  bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
