import React, { useState } from 'react';

const ProjectForm = ({ onAddProject }) => {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (projectName.trim() === '') return;

    onAddProject({ name: projectName, description: projectDescription });
    setProjectName('');
    setProjectDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="project-form">
      <input
        type="text"
        placeholder="Project Name"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        required
      />

      <textarea
        placeholder="Project Description"
        value={projectDescription}
        onChange={(e) => setProjectDescription(e.target.value)}
        required
      />
      <button type="submit">Add Project</button>
    </form>
  );
};

export default ProjectForm; 