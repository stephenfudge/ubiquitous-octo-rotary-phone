import '../styles/Nav.css';
import React from 'react';
import { Link } from 'react-router-dom';

// using react router and link for the navigation bar with the buttons for each of the categories
const NavRouter = (props) =>{
    return (
       <div className='bg-darkpurple text-jazzberry'>
       <h1 className="text-4xl text-paradise py-7" id="title">Stephen's Movie Collection</h1> 
         <div className="navbar-menu">
           <ul>
           <li> <Link to="/"><button className='bg-white hover:bg-bedazzle text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow' >
               HOME
             </button>
             </Link>
       </li>

           <li> <Link to="/films"><button className='bg-white hover:bg-bedazzle text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow' id="films" >
               Films
             </button>
             </Link>
       </li>
       <li>
        <Link to="/music">
             <button className='bg-white hover:bg-bedazzle text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow' id="music" >
               Music
             </button>
             </Link>
       </li>
       <li>
            <Link to="/tv">
             <button className='bg-white hover:bg-bedazzle text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow' id="tv">
               TV Shows
             </button>
             </Link>
       </li>
       <li>
        <Link to="/wrestling">
             <button className='bg-white hover:bg-bedazzle text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow' id="wrestling" >
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


 