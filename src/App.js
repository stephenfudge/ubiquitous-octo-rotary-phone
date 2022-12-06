import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
// import Main from './pages/Main';
import NavRouter from "./components/NavRouter";
import Footer from "./components/Footer";
import TestMain from "./pages/TestMain";
import Nav2 from './components/Nav2';

import Films from "./components/Films/Films";
import FilmsDVD from "./components/Films/Format/FilmsDVD";
import FilmsBRD from "./components/Films/Format/FilmsBRD";

import Music from "./components/Music/Music";
import MusicDVD from "./components/Music/Format/MusicDVD";
import MusicBRD from "./components/Music/Format/MusicBRD";

import Tv from "./components/Tv/Tv";
// import TvBRD from './components/Tv/Format/TvBRD';
import TvDVD from './components/Tv/Format/TvDVD';

// Wrestling
import Wrestling from "./components/Wrestling/Wrestling";
import WWE from "./components/Wrestling/Promotion/WWE";
import Compilation from "./components/Wrestling/Presentation/Compilation";
import Documentary from "./components/Wrestling/Presentation/Documentary";
import PPV from "./components/Wrestling/Presentation/PPV";
import Other from "./components/Wrestling/Promotion/Other";
import WrestlingBRD from "./components/Wrestling/Format/WrestlingBRD";
import WrestlingDVD from "./components/Wrestling/Format/WrestlingDVD";


function App() {
  return (
    <Router>
      <div className="App">
        {/* <NavRouter /> */}
        <Nav2 />
        <Routes>
          <Route path="/" element={<TestMain />} />

          <Route path="/films" element={<Films />} />
          <Route path="/films/brd" element={<FilmsBRD />} />
          <Route path="/films/dvd" element={<FilmsDVD />} />

          <Route path="/music" element={<Music />} />
          <Route path="/music/brd" element={<MusicBRD />} />
          <Route path="/music/dvd" element={<MusicDVD />} />

          <Route path="/tv" element={<Tv />} />
          {/* <Route path="/tv/brd" element={<TvBRD />} /> */}
          <Route path="/tv/dvd" element={<TvDVD />} />


          <Route path="/wrestling" element={<Wrestling />} />
          <Route path="/wrestling/brd" element={<WrestlingBRD />} />
          <Route path="/wrestling/dvd" element={<WrestlingDVD />} />
          <Route path="/wrestling/compilation" element={<Compilation />} />
          <Route path="/wrestling/documentary" element={<Documentary />} />
          <Route path="/wrestling/ppv" element={<PPV />} />
          <Route path="/wrestling/other-promotions" element={<Other />} />
          <Route path="/wrestling/wwe" element={<WWE />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
