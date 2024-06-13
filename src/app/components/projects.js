import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Sample data for projects
const projects = [
  {
    title: "Point of Sale System",
    description: "This is a cloud-based point of sale system that is available on mobile, computers, tablets, and POS devices. (Offline mode available).",
    images: [
      "/iPhone1.png",
      "/Iphone 15 Screens Mockup (1).png",
    ],
    type: "mobile-app"
  },
  {
    title: "Invoicing System",
    description: "This is a cloud-based invoicing system that is available on mobile, computers, tablets, and POS devices. (Offline mode available).",
    images: [
      "/Iphone 15 Screens Mockup.png",
      "/iPhone 15 Mockup, Perspective.png",
    ],
    type: "mobile-app"
  },
  {
    title: " E-commerce Platform",
    description: "An online store for various products with a user-friendly interface and secure payment options.",
    images: [
      "/Iphone 15 Screens Mockup (2).png",
      "/iPhone 15 Pro Mockup, Front and Back View (1).png"
    ],
    type: "mobile-app"
  },
  {
    title: "Swahilipro Compiler",
    description: "This is a Swahili compiler and programming language that allows Swahili speakers to write and execute code in their native language.",
    images: [
      "/Macbook Mockup Front View UV (3).png",
      "/iPad Pro Mockup UV (2).png",

    ],
    type: "website",
    link:'https://swahilipro-web.vercel.app/',

  },
  {
    title: "Chatpdf",
    description: "An Artificial Intelligence project that uses OpenAi embeddings to interact with PDF files stored in an AWS S3 bucket.",
    images: [
      "/Macbook Mockup Front View UV (6).png",
      "/Macbook Mockup Front View UV (7).png",

      
      
    ],
    type: "website",
    link:'https://github.com/bonnieace/chatpdf_frontend',
  },
  {
    title: "Tshiroh's Kitchen",
    description: "A bakery website for Tshiroh's bakery that showcases different cakes and flavors,client reviews and allows bookings.",
    images: [
      "/Macbook Mockup Front View UV (1).png",
      "/Macbook Mockup Front View UV (4).png"
      
      
    ],
    type: "website",
    link:'https://tshiroh.s3.eu-north-1.amazonaws.com/Cake-Website/index.html',
  },
  {
    title: "MEXC Futures trading",
    description: "A cryptocurrency webapp project that uses the mexc API to trade futures using the martingale trading strategy.",
    images: [
      "/iPad Pro Mockup UV (1).png",
      "/Macbook Mockup Front View UV (2).png"
      
    ],
    type: "website",
    link:'https://mexc-sigma.vercel.app/',
  },

  {
    title: "Portfolio Website",
    description: "A software Developer portfolio website showcasing different skills and projects,customer reviews and intuitive user interface.",
    images: [
      "/Macbook Mockup Front View UV (5).png",
      
      
    ],
    type: "website",
    link:'https://bonifacemasota.netlify.app/',
  },
  {
    title: "Animation playlist",
    description: "A youtube playlist with all my animated videos.They range from explainer videos,AI voice over videos and blender animations and short films.",
    images: [
      "/Macbook Mockup Front View UV (8).png",
      
      
    ],
    type: "website",
    link:'https://www.youtube.com/watch?v=Elq9Vt-kBLM&list=PLGngOqJJtp0fvHwazN4kDpLspzYex6fSD',
  },

  // Add more projects as needed
];

const Project = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  
  return (
    <div id='project' className={`project ${isExpanded ? 'expanded' : ''}`}>
      <div className="image">
        {isExpanded ? (
          <Slider dots={true} infinite={project.images.length > 1} speed={500} slidesToShow={1} slidesToScroll={1}>
            {project.images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Project ${project.type} ${index + 1}`} className="object-cover w-full h-full" />
              </div>
            ))}
          </Slider>
        ) : (
          <img src={project.images[0]} alt={project.title} className="object-cover w-full h-full" />
        )}
      </div>
      <div className="project-info">
        <h3 className='font-bold text-blue-500'>{project.title}</h3>
        <p>{project.description}</p>
        {project.type === 'website' && (
          <a
            href={project.link}  // Replace with actual URL when available
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-4 py-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded transition duration-300"
          >
            Visit Website
          </a>
        )}
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-500">Our Projects</h2>
        <div className="project-list grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
