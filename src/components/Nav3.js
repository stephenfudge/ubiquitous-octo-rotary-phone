import React from "react";
import "../styles/Nav.css";
import MusicDrop from "./Dropdowns/MusicDrop";
import FilmDrop from "./Dropdowns/FilmDrop";
import TvDrop from "./Dropdowns/TvDrop";
import WrestlingDrop from "./Dropdowns/WrestlingDrop";

export default function Nav3() {
  return (
    <div className="bg-darkpurple text-jazzberry">
      <h1 className="text-4xl text-paradise py-7" id="title">
        Stephen's Movie Collection
      </h1>
      <div className="navbar-menu">
        <ul>
          <li dismissOnClick={false}>
            <FilmDrop />
          </li>
          <li dismissOnClick={false}>
            <MusicDrop />
          </li>
          <li dismissOnClick={false}>
            <TvDrop />
          </li>
          <li dismissOnClick={false}>
            <WrestlingDrop />
          </li>
        </ul>
      </div>
    </div>
  );
}
