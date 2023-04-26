import React, { useState } from "react";
import { Github } from 'react-bootstrap-icons';

import '../../styles/Portfolio.css';

function Portfolio ({ projects }) {

  // useState to set the initial values for the project card components
  const [projectData, setProjectData] = useState({
    id: '',
    title: '',
    technologies: '',
    link: '',
    github: '',
  });

  // useState for adding boolean value to determine whether a particular card is being hovered over with a mouse.
  const [notHoveredCard, setHoveredCard] = useState(true);

  // function to set the values in the project card to those coming from the project props
  // and change the value of the hovered card to show that it is being hovered over with a mouse.
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

  // set the values back to the initial values when the user is no longer hovering over a particular card.
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
      <h2>Portfolio</h2>
      <div className='d-flex flex-wrap justify-content-evenly m-5'>
        {projects.map((project) => (
          <div className='custom-card col-10 col-md-5 m-1'
          key={project.id}
          // events for displaying the selected card
          onMouseEnter={() => handleMouseEnter(project)}
          onMouseLeave={() => handleMouseLeave()}>
            <div className={`img-${project.id}`}
            alt={`project ${project.id}-${project.title}`}>
              {/* conditionally rendering the selected if the selected card's id matches the id of the project prop*/}
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