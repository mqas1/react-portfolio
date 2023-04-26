import React from 'react';
import NavTabs from './NavTabs';

import '../styles/Header.css';


function Header ({ currentPage, handlePageChange }) {
  return (
    <header>
      <div className='hero' alt='blurred lights' />
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange}/>
    </header>
  );
}

export default Header;