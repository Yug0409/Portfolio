import React from 'react';
import project1 from "../assets/Photoes/myphoto2.jpg"

const PROJECTS = [
  {
    title: "Movie Tickets Booking Interface (December 2022)",
    image: project1,
    description:
      "Tkinter's Movie Tickets Booking Interface offers seamless movie browsing, showtime selection, and seat reservation, enhancing the moviegoing experience with intuitive GUI elements.",
    technologies: ["Python", "Tkinter"],
  },
  {
    title: "Computational Data Analysis of SDG 11 (January 2023)",
    image: project1,
    description:
      "The study aimed to analyse urban housing and slum settlements, assessing basic amenities like electricity, sanitation, and waste management. Statistical methods such as linear regression, correlation, standard deviation, and mean were employed for inference and description.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    title: "Automated Plant Health Monitoring System (June 2023)",
    image: project1,
    description:
      "An autonomous plant health monitoring cart equipped with camera, sensors, and GPS enables automated data collection for plant growth analysis. Technology stack includes Arduino, Raspberry Pi, and integrated sensors for garden or plant facility monitoring.",
    technologies: ["Arduino", "Raspberry Pi", "Sensors"],
  },
  {
    title: "Winterfell’s Destiny: The Quest of the Winter’s (Feb 2024)",
    image: project1,
    description:
      "Winterfell landscape from Game of Thrones recreated in Unreal Engine 5 offers immersive exploration with meticulously crafted props, meshes, and blueprints. This 3D environment authentically captures the essence of the legendary series, inviting players to explore its iconic setting.",
    technologies: ["Unreal Engine 5", "3D Modeling"],
  },
];

const Projects = () => {
  return (
    <div className="mb-6">
      <h2 className="text-3xl font-bold mt-8 mb-4">Projects</h2>
      {PROJECTS.map((project, index) => (
        <div key={index} className="mb-6 p-4 bg-gray-800 rounded-lg">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-lg mt-2" />
          <p className="mt-2">{project.description}</p>
          <p className="mt-1 text-gray-400">Technologies: {project.technologies.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
