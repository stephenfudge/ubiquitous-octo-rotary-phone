import React from 'react';
import music from '../seeds/musicData';

  
//   const Music = () => {

//     return(
//         <div className=''>
//             <div className='container bg-gray-300 mx-auto rounded-xl'>
//                  {music.map((film) => (
//                     <li className='' key={film.id}>
//                         <div>
//                           <h2 className='film-name'>{[film.title]} {film.format}</h2><br />
//                         </div>
//                     </li>
//     ))}
//             </div>
//         </div>
//     )

// }

const Music = () => {
  return(
    <div className="flex justify-center mx-auto bg-bedazzle">
      <table className="table-auto">
        <thead>
          <tr className="text-lightpink">
            <th>
              Artist/Title of DVD
            </th>
              <th>
                Media Format
              </th>
          </tr>
        </thead>
       <tbody className='text-powder'>
          {music.map((film) =>{
  return (
    <tr  key={film.id}>
    <td>{[film.title]}</td>
    <td>{film.format}</td>
    </tr>
          );
          })}
         
      </tbody> 
     </table>
    </div>
  )
}

export default Music;