import React from "react";
import NavTabs from "./NavTabs";
import headerImage from '../assets/images/Header.jpeg'

function Header ({ currentPage, handlePageChange }) {
  return (
    <div>
      <img src={headerImage} alt='blue fractal wave' />
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange}/>
    </div>
  );
}

export default Header;