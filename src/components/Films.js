import React from 'react';
import films from '../seeds/filmData';

//   const Films = () => {

//     return(
//         <div className=''>
//             <div className=''>
//                  {films.map((film) => (
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


const Films = () => {
  return(
    <div className='flex justify-center bg-bedazzle'>
      <table>
        <thead className='text-lightpink'>
          <tr>
             <th>Title</th>
               <th>Media Format</th>
          </tr>
        </thead>
        <tbody className='text-powder'>
          {films.map((film) => {
            return(
              <tr key={film.id}>
                <td>{film.title}</td>
                  <td>{film.format}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Films;

 