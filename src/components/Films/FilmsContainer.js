import React, { useState } from "react";

import Films from './Films';
import FilmsBRD from "./Format/FilmsBRD";
import FilmsDVD from "./Format/FilmsDVD";
import FilmDropdown from "./FilmsDropdown";

export default function FilmContainer() {
  const [currentPage, setCurrentPage] = useState("Music");

  const renderPage = () => {
    if (currentPage === "Films") {
      return <Films />;
    }
    if (currentPage === "FilmsBRD") {
      return <FilmsBRD />;
    }
    if (currentPage === "FilmsDVD") {
      return <FilmsDVD />;
    }
    return <Films />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="flex flex-col items-center mx-auto bg-darkpurple">
      {/* header of page */}
      <div className="md:text-5xl sm:text-2xl text-bedazzle py-2">
        Feature Films
      </div>
     <FilmDropdown 
      currentPage={currentPage}
      handlePageChange={handlePageChange}
      />
      {renderPage()}
    </div>
  );
}
