import React from "react";
import "../../styles/Nav.css";

export default function WrestlingDropdown({ currentPage, handlePageChange }) {
  return (
    // <div class="p-10">
    <div>
      {/* Promotion */}
      <div class="dropdown inline-block relative px-4">
        <button className="bg-white hover:bg-bedazzle hover:text-paradise text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center">
          <span class="mr-1">Promotion</span>
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
          </svg>
        </button>
        <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
          <li className="menuTypes bg-white hover:bg-bedazzle hover:text-paradise text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            <a
              href="#nonwwe"
              onClick={() => handlePageChange("Other")}
              className={
                currentPage === "Other" ? "nav-link active" : "nav-link"
              }
            >
              Non WWE Content
            </a>
          </li>
          <li className="menuTypes bg-white hover:bg-bedazzle hover:text-paradise text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            <a
              href="#wwe"
              onClick={() => handlePageChange("WWE")}
              className={currentPage === "WWE" ? "nav-link active" : "nav-link"}
            >
              WWE Content
            </a>
          </li>
        </ul>
      </div>
      {/* Presentation Type */}
      <div class="dropdown inline-block relative px-4">
        <button className="bg-white hover:bg-bedazzle hover:text-paradise text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center">
          <span class="mr-1">Presentation Type</span>
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
          </svg>
        </button>
        <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
          <li className="menuTypes bg-white hover:bg-bedazzle hover:text-paradise text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            <a
              href="#compilation"
              onClick={() => handlePageChange("Compilation")}
              className={
                currentPage === "Compilation" ? "nav-link active" : "nav-link"
              }
            >
              Compilation
            </a>
          </li>
          <li className="menuTypes bg-white hover:bg-bedazzle hover:text-paradise text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            <a
              href="#documentary"
              onClick={() => handlePageChange("Documentary")}
              className={
                currentPage === "Documentary" ? "nav-link active" : "nav-link"
              }
            >
              Documentaries
            </a>
          </li>
          <li className="menuTypes bg-white hover:bg-bedazzle hover:text-paradise text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            <a
              href="#wrestlingppv"
              onClick={() => handlePageChange("WrestlingPPV")}
              className={
                currentPage === "WrestlingPPV" ? "nav-link active" : "nav-link"
              }
            >
              PPVs
            </a>
          </li>
        </ul>
      </div>

      {/* Format */}
      <div class="dropdown inline-block relative px-4">
        <button className="bg-white hover:bg-bedazzle hover:text-paradise text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center">
          <span class="mr-1">Format Type</span>
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
          </svg>
        </button>
        <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
          <li className="menuTypes bg-white hover:bg-bedazzle hover:text-paradise text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            <a
              href="#brd"
              onClick={() => handlePageChange("WrestlingBRD")}
              className={currentPage === "WrestlingBRD" ? "nav-link active" : "nav-link"}
            >
              BluRays
            </a>
          </li>
          <li className="menuTypes bg-white hover:bg-bedazzle hover:text-paradise text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            <a
              href="#dvd"
              onClick={() => handlePageChange("WrestlingDVD")}
              className={currentPage === "WrestlingDVD" ? "nav-link active" : "nav-link"}
            >
              DVDs
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
