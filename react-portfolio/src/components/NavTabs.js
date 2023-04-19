import React, { useState } from 'react';

function NavTabs({ currentPage, handlePageChange }) {

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className='navbar navbar-expand-md'> 
      <div className='container-fluid'>
        <div className='navbar-brand h1 my-1'>Morgan Qasabian</div>
        <button className='navbar-toggler mb-1' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded={!isNavCollapsed ? true : false} aria-label='Toggle navigation' onClick={handleNavCollapse}>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify-content-md-end justify-content-lg-center`}>
          <ul className='nav nav-pills nav-fill d-inline d-sm-flex'>
            <li className='nav-item'>
              <a
                href='#about'
                onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
              >
                About
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='#portfolio'
                onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
              >
                Portfolio
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='#resume'
                onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
              >
                Resume
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='#contact'
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavTabs;