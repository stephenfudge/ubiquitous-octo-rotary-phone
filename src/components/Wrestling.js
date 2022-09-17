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
        <div className='flex flex-col justify-center mx-auto bg-darkpurple'>
            <div className='text-5xl text-bedazzle py-2'>
             Professional Wrestling DVDs and BluRays
            </div>
            <div className='justify-center mx-auto py-8'>
            <table className='table-auto border-collapse border border-black'>
                <thead>
                    <tr className='text-lightpink'>
                        <th className='border border-black px-4'>Promotion</th>
                            <th className='border border-black'>Title</th>
                                <th className='border border-black px-4'>Presentation Format</th>
                                    <th className='border border-black px-4'>Media Format</th>
                    </tr>
                </thead>
                <tbody className='text-powder'>
                    {wrestling.map((film) => {
                        return(
                        <tr key={film.id}>
                            <td className='border border-black'>{film.promotion}</td>
                                <td className='border border-black px-4'>{film.title}</td>
                                    <td className='border border-black'>{film.presentation}</td>
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

export default Wrestling;