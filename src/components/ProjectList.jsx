import { useState } from 'react';
import React from 'react';
import ProjectItems from "./ProjectItems";

const ProjectList = ({ projects }) => {
    const [search, setSearch] = useState('');

    const filteredProjects = projects.filter(project =>
        project.name.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase())
    ) ;

    
  return ( 
  <div className="project-list">
    <form className="search-form">
      <input type="text" placeholder="Search projects..." 
      value = {search}
      onChange = {(e) => setSearch(e.target.value)}
      />
    </form>

   {filteredProjects.map((project) => (
        <ProjectItems key={project.id} project={project} />
      ))}
      
    </div>
  );
};

export default ProjectList;