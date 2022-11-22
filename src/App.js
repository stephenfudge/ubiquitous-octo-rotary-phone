import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
// import Main from './pages/Main';
import NavRouter from "./components/NavRouter";
import Footer from "./components/Footer";
import TestMain from "./pages/TestMain";

import Tv from "./components/Tv/Tv";

import Music from "./components/Music/Music";
import MusicDVD from "./components/Music/Format/MusicDVD";
import MusicBRD from "./components/Music/Format/MusicBRD";

import Films from "./components/Films/Films";
import FilmsDVD from './components/Films/Format/FilmsDVD'
import FilmsBRD from "./components/Films/Format/FilmsBRD";

// Wrestling
import Wrestling from "./components/Wrestling/Wrestling";
import WWE from "./components/Wrestling/Promotion/WWE";
import Compilation from "./components/Wrestling/Presentation/Compilation";
import Documentary from "./components/Wrestling/Presentation/Documentary";
import PPV from "./components/Wrestling/Presentation/PPV";
import Other from "./components/Wrestling/Promotion/Other";
import WrestlingBRD from "./components/Wrestling/Format/WrestlingBRD";
import WrestlingDVD from "./components/Wrestling/Format/WrestlingDVD";

// function App() {
//   return (
//     <div className="App">
//     <Main />
//     </div>
//   );
// }

function App() {
  return (
    <Router>
      <div className="App">
        <NavRouter />
        <Routes>
          <Route path="/" element={<TestMain />} />

          <Route path="/films" element={<Films />} />
          <Route path="/films/dvd" element={<FilmsDVD />} />
          <Route path="/films/brd" element={<FilmsBRD />} />

          <Route path="/music" element={<Music />} />
          <Route path="/music/dvd" element={<MusicDVD />}/>
          <Route path="/music/brd" element={<MusicBRD />}/>

          <Route path="/tv" element={<Tv />} />

          <Route path="/wrestling" element={<Wrestling />} />
          <Route path="/wrestling/dvd" element={<WrestlingDVD />} />
          <Route path="/wrestling/brd" element={<WrestlingBRD />} />
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
