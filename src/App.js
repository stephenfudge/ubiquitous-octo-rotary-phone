import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';



import './App.css';
// import Main from './pages/Main';
import NavRouter from './components/NavRouter';
import Footer from './components/Footer';
import TestMain from './pages/TestMain';
import Films from './components/Films';
import Tv from './components/Tv';
import Music from './components/Music';
import Wrestling from './components/Wrestling';

// function App() {
//   return (
//     <div className="App">
//     <Main />
//     </div>
//   );
// }



function App(){
  return(
    <Router>
      <div className='App'>
      <NavRouter />
      <Routes>

      <Route path='/' element={<TestMain />} />

      <Route path='/films' element={<Films />} />
      <Route path='/music' element={<Music />} />
      <Route path='/tv' element={<Tv />} />
      <Route path='/wrestling' element={<Wrestling />} />

      </Routes>


      <Footer />
      </div>
    </Router>
  )
}


export default App;