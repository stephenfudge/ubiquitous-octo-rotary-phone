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
      <table className="table-auto border-collapse border border-black">
        <thead>
          <tr className="text-lightpink">
            <th className='border border-black'>Musical Artist</th>
            <th className='border border-black'>Title of DVD</th>
            <th className='border border-black px-4'>Media Format</th>
          </tr>
        </thead>
       <tbody className='text-powder'>
          {music.map((film) =>{
  return (
    <tr  key={film.id}>
      <td className='border border-black px-4'>{film.artist}</td>
    <td className='border border-black px-4'>{[film.title]}</td>
    <td className='border border-black'>{film.format}</td>
    </tr>
          );
          })}
         
      </tbody> 
     </table>
    </div>
  )
}

export default Music;