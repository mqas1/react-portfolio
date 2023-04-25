import React, { useState } from "react";
import { Github } from 'react-bootstrap-icons';

import '../../styles/Portfolio.css';

function Portfolio ({ projects }) {

  const [projectData, setProjectData] = useState({
    id: '',
    title: '',
    technologies: '',
    link: '',
    github: '',
  });

  const [notHoveredCard, setHoveredCard] = useState(true);

  const handleMouseEnter = (project) => {
    setProjectData({
      id: project.id,
      title: project.title,
      technologies: project.technologies,
      link: project.link,
      github: project.github,
    });
    
    setHoveredCard(false);
  };

  const handleMouseLeave = () => {
    setProjectData({
      id: '',
      title: '',
      technologies: '',
      link: '',
      github: '',
    });

    setHoveredCard(true);
  };

  return (
    <section>
      <h2>My Portfolio</h2>
      <div className='d-flex flex-wrap justify-content-evenly m-5'>
        {projects.map((project) => (
          <div className='custom-card col-10 col-md-5 m-1'
          key={project.id}
          onMouseEnter={() => handleMouseEnter(project)}
          onMouseLeave={() => handleMouseLeave()}>
            <div className={`img-${project.id}`}
            alt={`project ${project.id}-${project.title}`}>
              {projectData.id === project.id ? (
                <div className='custom-card-body'>
                  <a className='h5' href={projectData.link} target='_blank' rel='noreferrer'>
                    {projectData.title}
                  </a>
                  <p className='h6'>
                    {projectData.technologies}
                  </p>
                  <a href={projectData.github} target='_blank' rel='noreferrer'>
                    {notHoveredCard ? (
                      <Github style={{ visibility: 'hidden' }}/>
                    ) : (
                      <Github style={{ visibility: 'visible' }}/>
                    )}
                  </a>
                </div>
              ) : (
                ''
            )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;