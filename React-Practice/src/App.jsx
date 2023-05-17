import React from 'react'
import './App.css'
import {Routes, Route, Link} from "react-router-dom"
import ProjectsList from './ProjectsList'
import Project from './Project'

function App() {

  return (
    <>
      <nav>
        <ul>
          <Link to='/projects'>Projects</Link>
        </ul>
      </nav>

      <Routes>
        <Route path='/projects' element={<ProjectsList/>}/>
        <Route path='/projects/:id' element={<Project/>}/>
      </Routes>
    </>
  )
}

export default App
