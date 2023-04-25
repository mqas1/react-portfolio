import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import projects from '../projects';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  useEffect(() => {
    const title = `Morgan's Portfolio`;
    document.title = title
  });

  // function that is responding back by returning back a component, eg about
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio projects={projects}/>;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}