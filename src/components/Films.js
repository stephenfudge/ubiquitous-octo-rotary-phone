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
    <div className='flex flex-col items-center bg-darkpurple'>
      <div className='md:text-5xl sm:text-2xl text-bedazzle py-2'>
        Feature Films
      </div>
      <div className='py-8'>
      <table className='border-collapse border border-black'>
        <thead className='text-lightpink'>
          <tr>
             <th className='border border-black'>Title</th>
               <th className='border border-black px-4'>Media Format</th>
          </tr>
        </thead>
        <tbody className='text-powder'>
          {films.map((film) => {
            return(
              <tr key={film.id}>
                <td className='border border-black px-4'>{film.title}</td>
                  <td className='border border-black'>{film.format}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Films;

 