import React from 'react';
import wrestling from '../seeds/wrestlingData';

const Wrestling = () => {

    return(
        <div className=''>
            <div className=''>
                 {wrestling.map((film) => (
                    <li className='' key={film.id}>
                        <div>
                          <h2 className='series-name'>{film.promotion} {[film.title]} {film.format} {film.presentation}</h2><br />
                        </div>
                    </li>
    ))}
            </div>
        </div>
    )

}

export default Wrestling;