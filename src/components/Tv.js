import React from 'react';
import tv from '../seeds/tvData';

//   const Tv = () => {

//     return(
//         <div className=''>
//             <div className=''>
//                  {tv.map((series) => (
//                     <li className='' key={series.id}>
//                         <div>
//                           <h2 className='series-name'>{[series.title]} Season {series.season} {series.format}</h2><br />
//                         </div>
//                     </li>
//     ))}
//             </div>
//         </div>
//     )

// }


const Tv = () =>{
  return(
    <div className='flex flex-col justify-center mx-auto bg-darkpurple py-2'>
      <div className='text-5xl text-bedazzle py-2'>
      TV Shows
      </div>
      <div className='justify-center mx-auto py-8'>
      <table class="table-auto border-collapse border border-black">
        <thead className='text-lightpink'>
          <th className='border border-black'>Series Name</th>
          <th className='border border-black px-4'>Season</th>
          <th className='border border-black px-4'>Media Format</th>
        </thead>
        <tbody className='text-powder'>
          {tv.map((series) =>{
            return(
              <tr key={series.id}>
                <td className='border border-black px-4'>{series.title}</td>
                <td className='border border-black'>{series.season}</td>
                <td className='border border-black'>{series.format}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
     
    </div>
    </div>
  )
}

export default Tv;