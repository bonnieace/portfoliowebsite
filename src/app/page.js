'use client'
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faCloud, faMobileAlt, faFilm, faChain, faVideo, faRobot } from '@fortawesome/free-solid-svg-icons';
import { Link as ScrollLink, Element, animateScroll as scroll, scroller } from 'react-scroll';
import Typed from 'react-typed';
import Projects from "./components/projects";
import TeamPage from "./components/team";
import Navs from "./components/nav";
import {BsLinkedin,BsGithub,BsDribbble} from 'react-icons/bs'
import './header.css'


import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
        
// Mock data
const services = [
  {
    title: "Custom Software Development",
    description: "We build scalable and robust custom software solutions tailored to your business needs.",
    icon: faLaptopCode
  },
  {
    title: "Cloud Services",
    description: "We leverage the power of cloud computing to enhance your operational efficiency.",
    icon: faCloud
  },
  {
    title: "Mobile App Development",
    description: "We create user-friendly and engaging mobile applications for Android and iOS.",
    icon: faMobileAlt
  },
  {
    title: "Animation",
    description: "We offer Animation services including product design, explainer videos, cartoons, and animations as well as music videos.",
    icon: faFilm
  },
  {
    title: "Blockchain Development",
    description: "We provide secure and decentralized blockchain solutions to revolutionize your business operations.",
    icon: faChain // Assuming faLink represents blockchain; replace with the appropriate icon if needed
  },
  {
    title: "Artificial Intelligence",
    description: "We develop AI-powered solutions to automate processes, gain insights, and improve decision-making.",
    icon: faRobot // Assuming faRobot represents AI; replace with the appropriate icon if needed
  }
];


const testimonials = [
  {
    name: "Owner",
    position: "Jamos Distributers, Ngara.",
    quote: "Kioo Technologies transformed our business with their innovative solutions. We tasked them with building a cloud-based invoicing system and they delivered beyond expectation.",
    image: "https://garethdavidstudio.com/images/ME_MOJI.png"
  },
  {
    name: "Owner",
    position: "Thamani Cereals, Ruiru.",
    quote: "Their Point of Sales mobile application helped transform my business. Highly recommend!",
    image: "https://borealos.com/dynamic/img/3-como-crear-memoji.jpg"
  },
  {
    name: "Owner",
    position: "Mugutha Hardware, Kiambu.",
    quote: "We use Kioo Technologies for all our software needs. From business websites to their robust point of sale system, they offer the best solutions for their customers.",
    image: "https://th.bing.com/th/id/R.37840ea9ad737e42567e5a3a34b76162?rik=CD82SRBrvmktpA&pid=ImgRaw&r=0"
  },
  {
    name: "Owner",
    position: "Tshiroh's Kitchen, Juja.",
    quote: "Kioo Technologies created our bakery website and hosts our business on their ecommerce platform.",
    image: "https://i.pinimg.com/originals/50/b2/6c/50b26ce6d2bc8adcf0e9a720c6fdc3f9.jpg"
  }
];





const Service = ({ service }) => (
  <div className="p-6 bg-white shadow-lg rounded-lg text-center">
    <FontAwesomeIcon icon={service.icon} size="3x" className="text-blue-500 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
    <p>{service.description}</p>
  </div>
);

const Testimonial = ({ testimonial }) => (
  <div className="p-6 bg-gray-50 shadow-lg rounded-lg text-center">
    <img src={testimonial.image} alt={testimonial.name} className="mx-auto  mb-4 rounded-full w-20 h-20" />
    <p className="italic">{testimonial.quote}</p>
    <h3 className="mt-4 text-blue-500 font-semibold">{testimonial.name}</h3>
    <p className="text-blue-400">{testimonial.position}</p>
  </div>
);

const Footer = () => (
  <footer id="contact" className="bg-gray-800 text-white py-10">
    <div className="max-w-7xl mx-auto text-center">
      <ScrollLink to="contact" smooth={true} duration={500} className="mb-4">Contact Us</ScrollLink>
      <p className="mb-4">Email: Bonniemasota@gmail.com | Phone: 0722218106</p>
      <p>&copy; 2024 Kioo Tech. All rights reserved.</p>
    </div>
  </footer>
);

export default function Home() {
  const [showMenu, setShowMenu] = useState(true);

  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <PrimeReactProvider>

    <div className="">
      <HeroSection />
      <Navs/>
      <ServicesSection />
      <Projects/>
      <TestimonialsSection />
      <TeamPage/>
      <Footer />
    </div>
    </PrimeReactProvider>

  );
}

const HeroSection = () => (
  <Element name="hero">
    <section className="relative flex items-center justify-center text-center  bg-blue-500 text-white py-20 px-4">
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 space-y-6 ml-4 hidden md:block">
        <a href="https://www.linkedin.com/in/bonnie-masota-310267248/" target="_blank" rel="noopener noreferrer">
          <BsLinkedin className="text-white text-2xl hover:text-gray-200 transition" />
        </a>
        <a href="https://github.com/bonnieace" target="_blank" rel="noopener noreferrer">
          <BsGithub className="text-white text-2xl hover:text-gray-200 transition" />
        </a>
        <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
          <BsDribbble className="text-white text-2xl hover:text-gray-200 transition" />
        </a>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Kioo Technologies</h1>
        <p className="text-lg mb-8">Innovative software solutions to drive your business forward.</p>
        <ScrollLink to="services" smooth={true} duration={500} className="bg-white text-blue-500 py-2 px-6 rounded-full font-semibold hover:bg-gray-200 transition">
          Explore Services
        </ScrollLink>
      </div>
      <a href="#contact" className="absolute right-0 top-1/2 transform -translate-y-1/2 -rotate-90 text-lg font-semibold text-white hover:text-gray-200 transition hidden md:block">
        scroll down
      </a>
    </section>
  </Element>
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
