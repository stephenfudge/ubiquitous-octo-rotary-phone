import React, { useState } from "react";
import WrestlingNav from "./WrestlingNav";
import Wrestling from "./Wrestling";
import WrestlingDVD from "./Format/WrestlingDVD";
import WrestlingBRD from "./Format/WrestlingBRD";
import WrestlingCompilation from "./Presentation/Compilation";
import WrestlingDocumentary from "./Presentation/Documentary";
import WrestlingPPV from "./Presentation/PPV";
import WWE from "./Promotion/WWE";
import Other from "./Promotion/Other";

import Dropdown from './dropdown'

export default function WrestlingContainer() {
  const [currentPage, setCurrentPage] = useState("Wrestling");

  const renderPage = () => {
    if (currentPage === "Wrestling") {
      return <Wrestling />;
    }
    if (currentPage === "WrestlingBRD") {
      return <WrestlingBRD />;
    }
    if (currentPage === "WrestlingDVD") {
      return <WrestlingDVD />;
    }
    if (currentPage === "WrestlingPPV") {
      return <WrestlingPPV />;
    }
    if (currentPage === "WWE") {
      return <WWE />;
    }
    if (currentPage === "Documentary") {
      return <WrestlingDocumentary />;
    }
    if (currentPage === "Compilation") {
      return <WrestlingCompilation />;
    }
    if (currentPage === "Other") {
      return <Other />;
    }

    return <Wrestling />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="flex flex-col items-center mx-auto bg-darkpurple">
      {/* header of page */}
      <div className="md:text-5xl sm:text-2xl text-bedazzle py-2">
        Professional Wrestling DVDs and BluRays
      </div>
      {/* <WrestlingNav
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      /> */}
      <Dropdown 
      currentPage={currentPage}
      handlePageChange={handlePageChange}
      />
      {renderPage()}
    </div>
  );
}
