import React from 'react'
import {Link} from "react-router-dom"
 
export default function ProjectsList() {
  return (
    <div>
      <h1>Project List</h1>
      <Link to="/projects/1" target='_blank'>Project 1</Link>
      <br />
      <Link to="/projects/2">Project 2</Link>
    </div>
  )
}
