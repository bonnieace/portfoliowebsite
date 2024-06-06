import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Sample data for projects
const projects = [
  {
    title: "Point of sale System",
    description: "This is a cloud-based point of sale system that is available on mobile, computers, tablets, and POS devices. (Offline mode available).",
    images: [
      "/iPhone1.png", // Assuming iPhone1.png is located in the public folder
      "/Iphone 15 Screens Mockup (1).png",

    ],
  },
  {
    title: "Invoicing System",
    description: "This is a cloud-based invoicing system that is available on mobile, computers, tablets, and POS devices. (Offline mode available).",
    images: [
      "/Iphone 15 Screens Mockup.png", // Assuming iPhone1.png is located in the public folder
      "/iPhone 15 Mockup, Perspective.png",
    ],
  },
  {
    title: "Swahilipro Compiler",
    description: "This is a Swahili compiler and programming language that allows Swahili speakers to write and execute code in their native language.",
    images: [
      "/iPhone 15 Pro Max Mockup, Front View.png", // Assuming iPhone1.png is located in the public folder
    ],
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
                <img src={image} alt={`Project ${index + 1}`} className="object-cover w-full h-full" />
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
