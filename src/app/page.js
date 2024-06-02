'use client'
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faCloud, faMobileAlt, faFilm } from '@fortawesome/free-solid-svg-icons';
import Typed from 'react-typed';
import Projects from "./components/projects";
import TeamPage from "./components/team";

// Mock data
const services = [
  {
    title: "Custom Software Development",
    description: "Build scalable and robust custom software solutions tailored to your business needs.",
    icon: faLaptopCode
  },
  {
    title: "Cloud Services",
    description: "Leverage the power of cloud computing to enhance your operational efficiency.",
    icon: faCloud
  },
  {
    title: "Mobile App Development",
    description: "Create user-friendly and engaging mobile applications for Android and iOS.",
    icon: faMobileAlt
  },
  {
    title: "Animation",
    description: "We offer Animation services including product design, explainer videos, cartoons, and animations as well as music videos.",
    icon: faFilm
  }
];

const testimonials = [
  {
    name: "Mr Ochola",
    position: "CEO, Jamos Distributers.",
    quote: "Kioo Technologies transformed our business with their innovative solutions. We tasked them with building a cloud-based invoicing system and they delivered beyond expectation.",
    image: "https://via.placeholder.com/50"
  },
  {
    name: "Ann Nyathika",
    position: "Owner, Thamani Cereals",
    quote: "Their Point of Sales mobile application helped transform my business. Highly recommend!",
    image: "https://via.placeholder.com/50"
  },
  {
    name: "Alice Wanjiku",
    position: "Owner, Mugutha Hardware",
    quote: "We use Kioo Technologies for all our software needs. From business websites to their robust point of sale system, they offer the best solutions for their customers.",
    image: "https://via.placeholder.com/50"
  }
];

const Navigation = ({ setShowMenu, showMenu }) => (
  <nav className="bg-blue-500 shadow-lg p-4 flex justify-between items-center">
    <div className="text-2xl text-white font-bold">Kioo Tech</div>
    <div className="hidden md:flex space-x-6 text-white">
      <NavLink href="#services">Services</NavLink>
      <NavLink href="#projects">Projects</NavLink>

      <NavLink href="#testimonials">Testimonials</NavLink>
      <NavLink href="#team">Team</NavLink>

      <NavLink href="#contact">Contact</NavLink>
    </div>
    <MobileMenuButton setShowMenu={setShowMenu} showMenu={showMenu} />
  </nav>
);

const NavLink = ({ href, children }) => (
  <a href={href} className="hover:text-black">{children}</a>
);

const MobileMenuButton = ({ setShowMenu, showMenu }) => (
  <div className="md:hidden">
    <button onClick={() => setShowMenu((prevState) => !prevState)}>
      <FontAwesomeIcon icon={showMenu ? "times" : "bars"} className="w-6 h-6" />
    </button>
  </div>
);

const MobileMenu = () => (
  <div className="md:hidden bg-white p-4 space-y-4">
    <NavLink href="#services">Services</NavLink>
    <NavLink href="#testimonials">Testimonials</NavLink>
    <NavLink href="#contact">Contact</NavLink>
  </div>
);

const Service = ({ service }) => (
  <div className="p-6 bg-white shadow-lg rounded-lg text-center">
    <FontAwesomeIcon icon={service.icon} size="3x" className="text-blue-500 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
    <p>{service.description}</p>
  </div>
);

const Testimonial = ({ testimonial }) => (
  <div className="p-6 bg-gray-50 shadow-lg rounded-lg text-center">
    <img src={testimonial.image} alt={testimonial.name} className="mx-auto  mb-4 rounded-full" />
    <p className="italic">"{testimonial.quote}"</p>
    <h3 className="mt-4 text-blue-500 font-semibold">{testimonial.name}</h3>
    <p className="text-blue-400">{testimonial.position}</p>
  </div>
);

const Footer = () => (
  <footer id="contact" className="bg-gray-800 text-white py-10">
    <div className="max-w-7xl mx-auto text-center">
      <p className="mb-4">Contact Us</p>
      <p className="mb-4">Email: Bonniemasota@gmail.com | Phone: 0722218106</p>
      <p>&copy; 2024 Kioo Tech. All rights reserved.</p>
    </div>
  </footer>
);

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation setShowMenu={setShowMenu} showMenu={showMenu} />
      {showMenu && <MobileMenu />}
      <HeroSection />
      <ServicesSection />
      <Projects/>
      <TestimonialsSection />
      <TeamPage/>
      <Footer />
    </div>
  );
}

const HeroSection = () => (
  <section className="flex flex-col items-center justify-center text-center bg-blue-500 text-white py-20 px-4">
    <h1 className="text-4xl font-bold mb-4">Welcome to Kioo Technologies</h1>
    <p className="text-lg mb-8">Innovative software solutions to drive your business forward.</p>
    <a href="#services" className="bg-white text-blue-500 py-2 px-6 rounded-full font-semibold hover:bg-gray-200 transition">Explore Services</a>
  </section>
);

const ServicesSection = () => (
  <section id="services" className="py-20 px-4 bg-gray-50">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-500 text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => <Service key={index} service={service} />)}
      </div>
    </div>
  </section>
);

const TestimonialsSection = () => (
  <section id="testimonials" className="py-20 px-4 bg-white">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-500 text-center mb-12">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => <Testimonial key={index} testimonial={testimonial} />)}
      </div>
    </div>
  </section>
);
