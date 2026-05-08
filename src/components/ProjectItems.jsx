import React  from 'react';

const ProjectItems = ({ project }) => {
  return (
    <div className="project-items">
    
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      )}

  

export default ProjectItems;