import React, { useState } from 'react'
import SingleProject from './SingleProject'
import data from '../data'

const Projects = () => {
  
  return (
    <section id="projects" className="projects sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-bg">
          <span className="heading-sec__main">Projects</span>
        </h2>
        {data.map((data)=><SingleProject data={data} />)}
     </div>
   </section>
  )
}

export default Projects