import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
// import Main from './pages/Main';
import NavRouter from "./components/NavRouter";
import Footer from "./components/Footer";
import TestMain from "./pages/TestMain";
import Tv from "./components/Tv";
import Music from "./components/Music";

import Films from "./components/Films";
import FilmsDVD from "./components/Films/FilmsDVD";
import FilmsBRD from "./components/Films/FilmsBRD";

// Wrestling
import Wrestling from "./components/Wrestling";
import WWE from "./components/Wrestling/WWE";
import Compilation from './components/Wrestling/Presentation/Compilation'
import Documentary from "./components/Wrestling/Presentation/Documentary";
import PPV from "./components/Wrestling/Presentation/PPV";


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

          <Route path="/tv" element={<Tv />} />

          <Route path="/wrestling" element={<Wrestling />} />
          <Route path="/wrestling/wwe" element={<WWE />} />
          <Route path="/wrestling/compilation" element={<Compilation />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
