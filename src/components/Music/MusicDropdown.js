import React from "react";
import "../../styles/Nav.css";

export default function MusicDropdown({ currentPage, handlePageChange }) {
  return (
    // <div class="p-10">
    <div>
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
              href="#music"
              onClick={() => handlePageChange("Music")}
              className={
                currentPage === "Music" ? "nav-link active" : "nav-link"
              }
            >
              All Music
            </a>
          </li>

          <li className="menuTypes bg-white hover:bg-bedazzle hover:text-paradise text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            <a
              href="#musicbrd"
              onClick={() => handlePageChange("MusicBRD")}
              className={
                currentPage === "MusicBRD" ? "nav-link active" : "nav-link"
              }
            >
              BluRays
            </a>
          </li>
          <li className="menuTypes bg-white hover:bg-bedazzle hover:text-paradise text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            <a
              href="#musicdvd"
              onClick={() => handlePageChange("MusicDVD")}
              className={
                currentPage === "MusicDVD" ? "nav-link active" : "nav-link"
              }
            >
              DVDs
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}