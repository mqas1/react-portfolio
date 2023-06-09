import React from 'react';
import { Github, Linkedin, StackOverflow } from 'react-bootstrap-icons';
import '../styles/Footer.css';

function Footer () {
  return (
    <footer>
      <ul className='footer-ul'>
        <li className='footer-li' key='icon-1'>
          <a href='https://github.com/mqas1' target='_blank' rel='noreferrer'>
            <Github alt='GitHub icon with link to profile' className='custom-svg'/>
          </a>
        </li>
        <li className='footer-li' key ='icon-2'>
          <a href='https://www.linkedin.com/in/morgan-qasabian-7692ba273/' target='_blank' rel='noreferrer'>
            <Linkedin alt ='LinkedIn icon with link to profile' className='custom-svg'/>
          </a>
        </li>
        <li className='footer-li' key='icon-3'>
          <a href='https://stackoverflow.com/users/20137587/mqas' target='_blank' rel='noreferrer'>
          <StackOverflow alt='StackOverflow icon with link to profile' className='custom-svg'/>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;