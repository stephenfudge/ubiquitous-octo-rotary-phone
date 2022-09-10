import '../styles/Nav.css';

const Nav = (props) =>{
    function pageChange(event){
     const id = event.target.id;
     props.setPage(id);
    }
 
    
    
     return (
       <div className='bg-darkpurple text-jazzberry'>
       <h1 className="text-3xl text-paradise" id="title">Stephen's Movie Collection</h1>
        
         <div className="navbar-menu">
           <ul className={props.page}>
           <li> <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow' id="films" onClick={pageChange}>
               Films
             </button>
       </li>
       <li>
             <button className='bg-bedazzle-500 hover:bg-bedazzle-400 text-powder font-bold py-2 px-4 border-b-4 border-bedazzle-700 hover:border-bedazzle-500 rounded' id="music" onClick={pageChange}>
               Music
             </button>
       </li>
       <li>
             <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded' id="tv" onClick={pageChange}>
               TV Shows
             </button>
       </li>
       <li>
             <button className='bg-paradise-500 hover:bg-powder-700 text-jazzberry font-bold py-2 px-4 rounded' id="wrestling" onClick={pageChange}>
               Wrestling
             </button>
       </li>
          </ul>
    </div>
       </div>
     )
 };



 export default Nav;