import React from 'react';
import { useState } from 'react';

import Music from '../components/Music';
import Wrestling from '../components/Wrestling';
import Tv from '../components/Tv';
import Films from '../components/Films';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Main = () => {
const [page, setPage] = useState('music');

  function RenderPage(){
    switch(page){
      case "music":
        return <Music />
         case "wrestling":
            return <Wrestling />
            case "tv":
              return <Tv />
              case "films":
              return <Films />
              default:
               return <Music />
    } 


  }
  return (
    <div className="App">
    <Nav page={page} setPage={setPage}/>
  <RenderPage />
  <Footer />
    </div>
  );
}


export default Main;