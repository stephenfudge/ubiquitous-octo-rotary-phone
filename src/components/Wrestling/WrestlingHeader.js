import { Link } from "react-router-dom"

const WrestlingHeader = () => {
    return (
        <div>


<div className="md:text-5xl sm:text-2xl text-bedazzle py-2">
Professional Wrestling DVDs and BluRays
</div>
<div>
<ul>
  <li>
    <Link to="/wrestling/brd">
      <button className="bg-white hover:bg-bedazzle text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        BLU RAYS
      </button>
    </Link>
  </li>
  <li>
    <Link to="/wrestling/dvd">
      <button className="bg-white hover:bg-bedazzle text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        DVDs
      </button>
    </Link>
  </li>
  <li>
    <Link to="/wrestling/compilation">
      <button className="bg-white hover:bg-bedazzle text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        Compilations
      </button>
    </Link>
  </li>
  <li>
    <Link to="/wrestling/documentary">
      <button className="bg-white hover:bg-bedazzle text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        Documentaries
      </button>
    </Link>
  </li>
  <li>
    <Link to="/wrestling/ppv">
      <button className="bg-white hover:bg-bedazzle text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        Pay Per Views
      </button>
    </Link>
  </li>
  <li>
    <Link to="/wrestling/wwe">
      <button className="bg-white hover:bg-bedazzle text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        WWE Content
      </button>
    </Link>
  </li>
  <li>
    <Link to="/wrestling/other-promotions">
      <button className="bg-white hover:bg-bedazzle text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        Non WWE Content
      </button>
    </Link>
  </li>
  
</ul>
</div>
</div>

    )
}

export default WrestlingHeader;