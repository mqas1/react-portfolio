import React from "react";
import resumePdf from '../../assets/resume.pdf';
import { Download } from "react-bootstrap-icons";

function Resume () {
  return (
    <div>
      <h2>My Resume</h2>
      <p>Download my <a href={resumePdf} target='_blank' rel='noreferrer'>resume <Download /></a></p>
      <div className='container'>
        <div className='container-fluid'>
          <h5>Front-end Proficiencies</h5>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>responsive design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className='container-fluid'>
          <h5>back-end Proficiencies</h5>
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>JQuery</li>
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