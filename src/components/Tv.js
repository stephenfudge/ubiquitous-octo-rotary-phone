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
    <div className='flex justify-center mx-auto bg-bedazzle'>
      <table class="table-auto">
        <thead className='text-lightpink'>
          <th>
            Series Name
          </th>
          <th>
            Season
          </th>
          <th>
            Media Format
          </th>
        </thead>
        <tbody className='text-powder'>
          {tv.map((series) =>{
            return(
              <tr key={series.id}>
                <td>{series.title}</td>
                <td>{series.season}</td>
                <td>{series.format}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Tv;