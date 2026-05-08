import React, {useState} from "react";
import ProjectItems from "./ProjectItems";

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list">
      <ProjectItems projects={projects} />
    </div>
  );
};

export default ProjectList;
       /*  <div key={project.id} className="project-card">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectList; */