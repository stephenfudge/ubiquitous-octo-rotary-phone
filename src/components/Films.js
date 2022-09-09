import React from 'react';
import films from '../seeds/filmData';

  const Films = () => {

    return(
        <div className=''>
            <div className=''>
                 {films.map((film) => (
                    <li className='' key={film.id}>
                        <div>
                          <h2 className='film-name'>{[film.title]} {film.format}</h2><br />
                        </div>
                    </li>
    ))}
            </div>
        </div>
    )

}

export default Films;

 