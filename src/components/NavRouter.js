import '../styles/Nav.css';
import React from 'react';
import { Link } from 'react-router-dom';

const NavRouter = (props) =>{

 
    return (
       <div className='bg-darkpurple text-jazzberry'>
       <h1 className="text-3xl text-paradise" id="title">Stephen's Movie Collection</h1> 
        <Link to="/"><button id="testmain">HOME</button></Link>
         <div className="navbar-menu">
           <ul>
           <li> <Link to="/films"><button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow' id="films" >
               Films
             </button>
             </Link>
       </li>
       <li>
        <Link to="/music">
             <button className='bg-bedazzle-500 hover:bg-bedazzle-400 text-powder font-bold py-2 px-4 border-b-4 border-bedazzle-700 hover:border-bedazzle-500 rounded' id="music" >
               Music
             </button>
             </Link>
       </li>
       <li>
            <Link to="/tv">
             <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded' id="tv">
               TV Shows
             </button>
             </Link>
       </li>
       <li>
        <Link to="/wrestling">
             <button className='bg-paradise-500 hover:bg-powder-700 text-jazzberry font-bold py-2 px-4 rounded' id="wrestling" >
               Wrestling
             </button>
             </Link>
       </li>
          </ul>
    </div>
       </div>
     )
 };



 export default NavRouter;


 