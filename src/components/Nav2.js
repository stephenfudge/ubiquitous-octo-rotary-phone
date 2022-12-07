import React from 'react';
import '../styles/Nav.css';
import { Link } from 'react-router-dom';

export default function Nav2 () {
return (
    <div className='bg-darkpurple text-jazzberry'>
    <h1 className="text-4xl text-paradise py-7" id="title">Stephen's Movie Collection</h1> 
      <div className="navbar-menu">
        <ul>
        {/* <li> <Link to="/"><button className='bg-white hover:bg-bedazzle text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow' >
            HOME
          </button>
          </Link>
    </li> */}

{/* Feature Films */}
    <div className="dropdown inline-block relative px-4"> 
    <button className="bg-white hover:bg-bedazzle hover:text-paradise text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center">
          <span class="mr-1">Feature Films</span>
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
          </svg>
        </button>
        <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
            <Link to= "/films">
          <li className="menuTypes bg-white hover:bg-bedazzle hover:text-paradise text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              All Feature Films
          </li>
              </Link>

            <Link to="/films/brd">
          <li className="menuTypes bg-white hover:bg-bedazzle hover:text-paradise text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              BluRays
         </li>
            </Link>

           <Link to="/films/dvd">
          <li className="menuTypes bg-white hover:bg-bedazzle hover:text-paradise text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              DVDs
          </li>
           </Link>
        </ul>
    </div>

{/* Music items */}
    <div className="dropdown inline-block relative px-4"> 
    <button className="bg-white hover:bg-bedazzle hover:text-paradise text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center">
          <span class="mr-1">Music</span>
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
          </svg>
        </button>
        <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
            <Link to= "/music">
          <li className="menuTypes bg-white hover:bg-bedazzle hover:text-paradise text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              All Music
          </li>
              </Link>

            <Link to="/music/brd">
          <li className="menuTypes bg-white hover:bg-bedazzle hover:text-paradise text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              BluRays
         </li>
            </Link>

           <Link to="/music/dvd">
          <li className="menuTypes bg-white hover:bg-bedazzle hover:text-paradise text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              DVDs
          </li>
           </Link>
        </ul>
    </div>

{/* TV Dropdown */}
<div className="dropdown inline-block relative px-4"> 
    <button className="bg-white hover:bg-bedazzle hover:text-paradise text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center">
          <span class="mr-1">TV Shows</span>
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
          </svg>
        </button>
        <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
            <Link to= "/tv">
          <li className="menuTypes bg-white hover:bg-bedazzle hover:text-paradise text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              All TV Shows
          </li>
              </Link>

            <Link to="/tv/brd">
          <li className="menuTypes bg-white hover:bg-bedazzle hover:text-paradise text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              BluRays
         </li>
            </Link>

           <Link to="/tv/dvd">
          <li className="menuTypes bg-white hover:bg-bedazzle hover:text-paradise text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              DVDs
          </li>
           </Link>
        </ul>
    </div>
    </ul>
    
    {/* Wrestling */}
    <div className="dropdown inline-block relative px-4"> 
    <button className="bg-white hover:bg-bedazzle hover:text-paradise text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center">
          <span class="mr-1">Professional Wrestling</span>
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
          </svg>
        </button>
        <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
            <Link to= "/wrestling">
          <li className="menuTypes bg-white hover:bg-bedazzle hover:text-paradise text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              All Wrestling
          </li>
             </Link>

             <li className="menuTypes bg-white hover:bg-bedazzle hover:text-paradise text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Promotion
     </li>
     <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
        <Link to="/wrestling/wwe">
        <li>
        WWE Content
        </li>
        </Link>
        <Link to="/wrestling/other-promotions">
        <li>
        Non WWE Content
        </li>
        </Link>
      </ul>
         
      <li className="menuTypes bg-white hover:bg-bedazzle hover:text-paradise text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Presentation
      </li>
      <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
        <Link to="/wrestling/compilation">
        <li>
        Compilations
        </li>
        </Link>
        <Link to="/wrestling/documentary">
        <li>
        Documentaries
        </li>
        </Link>
        <Link to="/wrestling/ppv">
        <li>
        Pay Per View Events
        </li>
        </Link>
      </ul>
      </ul>

   
      <li className="menuTypes bg-white hover:bg-bedazzle hover:text-paradise text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Media Format
      </li>
      <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">

      <Link to="/wrestling/brd">
        <li>
       BluRays
        </li>
        </Link>
        <Link to="/wrestling/dvd">
        <li>
        DVDs
        </li>
        </Link>
    
     
    </ul>


        {/* </ul> */}
    </div>

    
    
    </div>
    </div>
  )
};