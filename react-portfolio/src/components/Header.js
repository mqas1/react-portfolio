import React from "react";
import NavTabs from "./NavTabs";

function Header ({ currentPage, handlePageChange }) {
  return (
    <div>
      <h1>Morgan Qasabian</h1>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange}/>
    </div>
  );
}

export default Header;