import { useState } from 'react'
import React from 'react';
import ProjectForm from './components/ProjectForm'
import ProjectList from './components/ProjectList'
import Header from './components/Header'
import './App.css'

function App() {
  const [projects, setProjects] = useState([
    {
    id: 1,
    name: 'Building a voting poll application',
    description: 'A voting poll application that allows users to create and participate in polls on various topics.'
  },
  {    id: 2,
    name: 'A task management tool',
    description: 'A simple task management tool that allows users to create, edit, and delete tasks. '
  },
  {
    id: 3,
    name: 'A shopping list app',
    description: 'A simple shopping list app that allows users to create, edit, and delete items from their shopping list.'
  }
]);

   function addProject(project) {
    setProjects([...projects, { id: projects.length + 1, ...project }]);
    console.log('Project added:', project);
    alert('Project added successfully!');
  }
  return (
    <>
    
    <Header />
    <hr />
    <ProjectForm onAddProject={addProject} />
    <ProjectList projects={projects} />
            
    </>
  )
}

export default App
