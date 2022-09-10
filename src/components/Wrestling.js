import React from 'react';
import wrestling from '../seeds/wrestlingData';

// const Wrestling = () => {

//     return(
//         <div className=''>
//             <div className=''>
//                  {wrestling.map((film) => (
//                     <li className='' key={film.id}>
//                         <div>
//                           <h2 className='series-name'>{film.promotion} {[film.title]} {film.format} {film.presentation}</h2><br />
//                         </div>
//                     </li>
//     ))}
//             </div>
//         </div>
//     )

// }


const Wrestling = () => {
    return(
        <div className='flex justify-center mx-auto bg-bedazzle'>
            <table className='table-auto'>
                <thead>
                    <tr className='text-lightpink'>
                        <th>Promotion</th>
                            <th>Title</th>
                                <th>Presentation Format</th>
                                    <th>Media Format</th>
                    </tr>
                </thead>
                <tbody className='text-powder'>
                    {wrestling.map((film) => {
                        return(
                        <tr key={film.id}>
                            <td>{film.promotion}</td>
                                <td>{film.title}</td>
                                    <td>{film.presentation}</td>
                                        <td>{film.format}</td>
                        </tr>
                    );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Wrestling;