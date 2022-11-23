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
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
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
            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
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
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
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
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
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
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
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
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
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
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
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
