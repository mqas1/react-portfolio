import React from 'react';
import Project from '../Project';
import projects from '../../projects';

function Portfolio () {

  return (
    <section>
      <h2>Portfolio</h2>
      <Project projects={projects}/>
    </section>
  );
}

export default Portfolio;