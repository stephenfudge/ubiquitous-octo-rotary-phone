import React from "react";

function WrestlingNav({ currentPage, handlePageChange }) {
  return (
    <div className="navbar-menu">
      <ul>
        <li>
          <a
            href="#wrestling"
            onClick={() => handlePageChange("Wrestling")}
            className={
              currentPage === "Wrestling" ? "nav-link active" : "nav-link"
            }
          >
            <button className="bg-white hover:bg-bedazzle hover:text-paradise text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Main Wrasslin
            </button>
          </a>
        </li>
        <li>
          <a
            href="#wrestlingdvd"
            onClick={() => handlePageChange("WrestlingDVD")}
            className={
              currentPage === "WrestlingDVD" ? "nav-link active" : "nav-link"
            }
          >
            <button className="bg-white hover:bg-bedazzle hover:text-paradise text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              DVDs
            </button>
          </a>
        </li>
        <li>
          <a
            href="#wrestlingbrd"
            onClick={() => handlePageChange("WrestlingBRD")}
            className={
              currentPage === "WrestlingBRD" ? "nav-link active" : "nav-link"
            }
          >
            <button className="bg-white hover:bg-bedazzle hover:text-paradise text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Blu Ray
            </button>
          </a>
        </li>
        <li>
          <a
            href="#compilation"
            onClick={() => handlePageChange("Compilation")}
            className={
              currentPage === "Compilation" ? "nav-link active" : "nav-link"
            }
          >
            <button className="bg-white hover:bg-bedazzle hover:text-paradise text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Compilations
            </button>
          </a>
        </li>
        <li>
          <a
            href="#documentary"
            onClick={() => handlePageChange("Documentary")}
            className={
              currentPage === "Documentary" ? "nav-link active" : "nav-link"
            }
          >
            <button className="bg-white hover:bg-bedazzle hover:text-paradise text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Documentaries
            </button>
          </a>
        </li>
        <li>
          <a
            href="#wrestlingppv"
            onClick={() => handlePageChange("WrestlingPPV")}
            className={
              currentPage === "WrestlingPPV" ? "nav-link active" : "nav-link"
            }
          >
            <button className="bg-white hover:bg-bedazzle hover:text-paradise text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              PPVs
            </button>
          </a>
        </li>
        <li>
          <a
            href="#wwe"
            onClick={() => handlePageChange("WWE")}
            className={currentPage === "WWE" ? "nav-link active" : "nav-link"}
          >
            <button className="bg-white hover:bg-bedazzle hover:text-paradise text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              WWE Stuff
            </button>
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#other"
            onClick={() => handlePageChange("Other")}
            className={currentPage === "Other" ? "nav-link active" : "nav-link"}
          >
            <button className="bg-white hover:bg-bedazzle hover:text-paradise text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Non WWE Stuff
            </button>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default WrestlingNav;
