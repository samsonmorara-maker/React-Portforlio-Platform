import React  from 'react';

const ProjectItems = ({ projects }) => {
  return (
    <div className="project-items">
      {projects.map((project) => (
        <div key={project.id} className="project-item">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectItems;