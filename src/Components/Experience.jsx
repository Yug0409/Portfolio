import React from 'react';

const EXPERIENCES = [
  {
    year: "2024 (May) - 2024 (July)",
    role: "Game Developer Intern",
    company: "Parallel Galaxies Ltd",
    description: `Created two games using Unity 2D and Unreal Engine 5: a mobile match-3 game like Candy Crush and an RPG shooting game for PC.`,
    technologies: ["Unity 2D", "Unreal Engine 5"],
  },
];

const Experience = () => {
  return (
    <div className="container mx-auto p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4">Experiences</h2>
      {EXPERIENCES.map((exp, index) => (
        <div key={index} className="mb-6 p-4 border-l-4 border-blue-500 bg-gray-800 rounded-lg">
          <h3 className="text-xl font-semibold">{exp.role} at {exp.company} ({exp.year})</h3>
          <p className="mt-2">{exp.description}</p>
          <p className="mt-1 text-gray-400">Technologies: {exp.technologies.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
