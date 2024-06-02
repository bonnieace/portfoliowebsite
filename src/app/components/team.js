import React from 'react';

// Sample data for team members
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


const TeamPage = () => {
  return (
    <section id="team" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-500">Our Team</h2>
        {/* Team Member Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:scale-105">
              <img src={member.image} alt={member.name} className="mx-auto rounded-full mb-4 h-32 w-32 object-cover" />
              <h3 className="text-xl text-blue-500 font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-500 text-blue-400 mb-4">{member.position}</p>
              <p className="text-sm text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamPage;
