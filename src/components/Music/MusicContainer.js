import React, { useState } from "react";

import Music from '../Music/Music';
import MusicDVD from '../Music/Format/MusicDVD';
import MusicBRD from '../Music/Format/MusicBRD';
import MusicDropdown from './MusicDropdown';

export default function MusicContainer() {
  const [currentPage, setCurrentPage] = useState("Music");

  const renderPage = () => {
    if (currentPage === "Music") {
      return <Music />;
    }
    if (currentPage === "MusicBRD") {
      return <MusicBRD />;
    }
    if (currentPage === "MusicDVD") {
      return <MusicDVD />;
    }
    return <Music />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="flex flex-col items-center mx-auto bg-darkpurple">
      {/* header of page */}
      <div className="md:text-5xl sm:text-2xl text-bedazzle py-2">
        Music DVDs and BluRays
      </div>
     <MusicDropdown 
      currentPage={currentPage}
      handlePageChange={handlePageChange}
      />
      {renderPage()}
    </div>
  );
}
