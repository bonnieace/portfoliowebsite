import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const TestimonialCard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonials = [
    
    {
      name: "Owner",
      position: "Thamani Cereals, Ruiru.",
      quote: "Their Point of Sales mobile application helped transform my business. Highly recommend!",
      image: "https://img.freepik.com/free-vector/peace-mind-concept-illustration_114360-7308.jpg?t=st=1730459256~exp=1730462856~hmac=b7190978f66873c15570999f2ff8fd235e5befadacc5ceee16d04c81c89da760&w=740"
    },
    {
      name: "Owner",
      position: "Mugutha Hardware, Kiambu.",
      quote: "From business websites to their robust point of sale system, they offer the best solutions for their customers.",
      image: "https://img.freepik.com/free-vector/hand-drawn-happy-black-woman-illustration_23-2149404964.jpg?t=st=1730459123~exp=1730462723~hmac=cf7a2ebaaa7cd3b6f508616982b4a1d80675df6e7018260f54d40dc68c242297&w=740"
    },
    {
      name: "Owner",
      position: "Tshiroh's Kitchen, Juja.",
      quote: "Kioo Technologies created our bakery website and hosts our business on their ecommerce platform.",
      image: "https://img.freepik.com/free-vector/flat-pancake-day-illustration_23-2149263773.jpg?t=st=1730459323~exp=1730462923~hmac=aa37972868809a069fe97d1a8b35093e4c774e38a3f8be8cb0d1faed03a4daec&w=740"
    },
    {
        name: "Owner",
        position: "Jamos Distributers, Ngara.",
        quote: "We tasked them with building a cloud-based invoicing system and they delivered beyond expectation.",
        image: "https://img.freepik.com/free-vector/flat-small-business-saturday-illustration_23-2150920426.jpg?t=st=1730459436~exp=1730463036~hmac=7f46df444d5d3bfbae893243245ca167707406190c20de7aabc6ed21109265e1&w=740"
      },
  ];

  return (
    <div className="relative max-w-4xl mx-auto pt-16 px-4 sm:px-20">
      {/* Stacked Shadow Cards */}
      <div className="relative">
        <div className="absolute inset-0 bg-blue-600 rounded-lg shadow-2xl transform translate-x-6 translate-y-6 opacity-50"></div>
        <div className="absolute inset-0 bg-blue-600 rounded-lg shadow-xl transform translate-x-3 translate-y-3 opacity-75"></div>

        {/* Main Testimonial Card */}
        <div className="relative bg-blue-600 rounded-lg shadow-xl h-auto sm:h-96">
          <div className="flex flex-col sm:flex-row items-center h-full">
            {/* Left section with image */}
            <div className="w-full sm:w-1/3 py-8 flex items-center justify-center">
              <img
                src={testimonials[currentSlide].image}
                alt={testimonials[currentSlide].name}
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white shadow-lg object-cover"
              />
            </div>

            {/* Right section with quote */}
            <div className="w-full sm:w-2/3 p-8 pl-0">
              <div className="relative">
                <div className="text-4xl sm:text-6xl text-blue-400 absolute -top-6 left-0 italic font-serif">"</div>
                <p className="text-lg sm:text-xl italic text-white px-4 sm:px-12 mb-8">
                  {testimonials[currentSlide].quote}
                </p>
                <div className="text-4xl sm:text-6xl text-blue-400 absolute -bottom-8 right-0 italic font-serif">"</div>
              </div>
              <div className="text-center mt-4 sm:mt-8">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">{testimonials[currentSlide].name}</h2>
                <p className="text-blue-200">{testimonials[currentSlide].position}</p>
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white w-4' : 'bg-blue-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Previous and Next Buttons */}
      <div className="flex justify-center mt-8">
        <button 
          className="bg-white h-10 w-10 rounded shadow-md border border-gray-200 mx-2"
          onClick={() => setCurrentSlide(prev => (prev === 0 ? testimonials.length - 1 : prev - 1))}
        >
          <ArrowLeft className="h-6 w-6 text-blue-600 mx-auto" />
        </button>
        <button 
          className="bg-white h-10 w-10 rounded shadow-md border border-gray-200 mx-2"
          onClick={() => setCurrentSlide(prev => (prev === testimonials.length - 1 ? 0 : prev + 1))}
        >
          <ArrowRight className="h-6 w-6 text-blue-600 mx-auto" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCard;
