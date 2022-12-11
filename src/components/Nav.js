import React from "react";
import "../styles/Nav.css";
import MusicDrop from "./Dropdowns/MusicDrop";
import FilmDrop from "./Dropdowns/FilmDrop";
import TvDrop from "./Dropdowns/TvDrop";
import WrestlingDrop from "./Dropdowns/WrestlingDrop";

export default function Nav() {
  return (
    <div className="bg-darkpurple text-jazzberry">
      <h1 className="text-5xl text-paradise py-7" id="title">
        Stephen's Movie Collection
      </h1>
      <div className="navbar-menu">
        <ul>
          <li dismissOnClick={true}>
            <FilmDrop />
          </li>
          <li dismissOnClick={true}>
            <MusicDrop />
          </li>
          <li dismissOnClick={true}>
            <TvDrop />
          </li>
          <li dismissOnClick={true}>
            <WrestlingDrop />
          </li>
        </ul>
      </div>
    </div>
  );
}
