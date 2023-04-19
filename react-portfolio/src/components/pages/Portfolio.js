import React from "react";
import { Github } from 'react-bootstrap-icons';

function Portfolio ({ projects }) {
  return (
    <div className='container'>
      <h1>Portfolio Page</h1>
      <div>
        {projects.map((project) => (
          <div className='card d-flex' key={project.id} style={ { width: '400px' } }>
            <img src={project.image} alt={`project ${project.id}-${project.title}`} />
            <div className='card-body d-flex-inline'>
              <a className='card-title h5' href={project.link} target='_blank' rel='noreferrer'>
                {project.title}
              </a>
              <p className='h6'>
                {project.technologies}
              </p>
              <a href={project.github} target='_blank' rel='noreferrer'>
                <Github />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;