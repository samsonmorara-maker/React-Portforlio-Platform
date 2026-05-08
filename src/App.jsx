import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ProjectForm from './components/ProjectForm'
import ProjectList from './components/ProjectList'

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
  }
  return (
    <>
    <ProjectForm onAddProject={addProject} />
    <ProjectList projects={projects} />
            
    </>
  )
}

export default App
