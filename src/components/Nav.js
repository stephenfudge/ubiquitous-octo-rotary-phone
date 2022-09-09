import '../styles/Nav.css';



const Nav = (props) =>{
    function pageChange(event){
     const id = event.target.id;
     props.setPage(id);
    }
 
    
    
     return (
       <div className=''>
       <h1 id="title">Stephen's Movie Collection</h1>
        
         <div className="navbar-menu">
           <ul className={props.page}>
           <li> <button id="films" onClick={pageChange}>
               Films
             </button>
       </li>
       <li>
             <button id="music" onClick={pageChange}>
               Music
             </button>
       </li>
       <li>
             <button id="tv" onClick={pageChange}>
               TV Shows
             </button>
       </li>
       <li>
             <button id="wrestling" onClick={pageChange}>
               Wrestling
             </button>
       </li>
          </ul>
    </div>
       </div>
     )
 };
 
 export default Nav;