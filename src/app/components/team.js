import React from 'react';

const Teampage = () => {
  const teamMembers = [
    {
      name: "Boniface Masota",
      position: "CEO, Lead Developer",
      bio: "As the CEO and Lead Developer, Boniface is responsible for guiding the company's strategic direction and overseeing the development of innovative software solutions.",
      image: "/IMG_20210801_223225_769.jpg",
    },
    {
      name: "Ann Nyathika",
      position: "Business Operations Manager",
      bio: "Ann is a seasoned Business Operations Manager with a proven track record of optimizing processes and driving efficiency. With a keen eye for detail and a proactive approach, she ensures seamless operations across all business functions.",
      image: "/Screenshot_2023-12-04-20-11-19-19.jpg",
    },
    {
      name: "Cate Wanjiru",
      position: "Client Satisfaction Manager",
      bio: "Cate is dedicated to ensuring the highest level of client satisfaction by understanding their needs and exceeding their expectations. With a customer-centric mindset and strong communication skills, she fosters positive relationships with clients and works tirelessly to address their concerns and deliver exceptional service.",
      image: "/GBWA-20180214003918.jpg",
    },
    // Add more team members as needed
  ];
  
  


  return (
    <div className="max-w-6xl mx-auto px-4 py-12 ">
      {/* Header Section */}
      <div className="text-center mb-12 ">
        <h1 className="text-3xl font-bold mb-4 text-blue-500">
          Team Behind Kioo<br />
           Technologies
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Meet the dedicated professionals driving our success and delivering exceptional
          solutions to elevate your digital projects.
        </p>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="relative rounded-3xl overflow-hidden bg-gray-100">
            {/* Image Container */}
            <div className="aspect-[4/5] relative">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
              
              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-sm text-gray-200">{member.position}</p>
                
                {/* Social Links */}
                <div className="flex gap-3 mt-4">
                  <button className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                    <span className="sr-only">Facebook</span>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 8H6v4h3v12h5V12h3.6l.4-4h-4V6.3c0-1.2.3-1.6 1.5-1.6H18V0h-3.8C10.5 0 9 1.6 9 4.6V8z"/>
                    </svg>
                  </button>
                  <button className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
                    </svg>
                  </button>
                  <button className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teampage;