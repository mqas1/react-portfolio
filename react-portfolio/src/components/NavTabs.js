import React, { useState } from 'react';

import '../styles/NavTabs.css';

function NavTabs({ currentPage, handlePageChange }) {

  // useState being used to control the navbar button as the JQuery code used by Bootstrap does not work with React.
  // Is also used to change the CSS class names to create a more responsive page depending on whether the button is collapsed or not.
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className={`${isNavCollapsed ? 'custom-navbar' : 'custom-navbar-expand'} navbar navbar-expand-md`}> 
      <div className='container-fluid'>
        <div className='navbar-brand h1 my-1 text-light fs-1'>Morgan Qasabian</div>
        <button className='navbar-toggler bg-light mb-1' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded={!isNavCollapsed ? true : false} aria-label='Toggle navigation' onClick={handleNavCollapse}>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify-content-md-end justify-content-lg-center`}>
          <ul className='nav nav-pills nav-fill d-flex'>
            <li className='nav-item custom-pill'>
              <a
                href='#about'
                onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
              >
                About Me
              </a>
            </li>
            <li className='nav-item custom-pill'>
              <a
                href='#portfolio'
                onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
              >
                Portfolio
              </a>
            </li>
            <li className='nav-item custom-pill'>
              <a
                href='#contact'
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
              >
                Contact
              </a>
            </li>
            <li className='nav-item custom-pill'>
              <a
                href='#resume'
                onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavTabs;