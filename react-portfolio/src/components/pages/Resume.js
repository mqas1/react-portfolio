import React from "react";
import resumePdf from '../../assets/resume.pdf';
import { Download } from "react-bootstrap-icons";
import '../../styles/Resume.css';

function Resume () {
  return (
    <div className='text-white'>
      <h2>Resume</h2>
      <p className='mx-2 p-2'>Download my <a className='resume-link text-white' href={resumePdf} target='_blank' rel='noreferrer'>resume <Download /></a></p>
      <div className='container-fluid mx-2'>
        <div className=''>
          <h5>Front-end Proficiencies</h5>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>responsive design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div>
          <h5>Back-end Proficiencies</h5>
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;