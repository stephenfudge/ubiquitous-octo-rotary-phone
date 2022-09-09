import React from 'react';
import tv from '../seeds/tvData';

  const Tv = () => {

    return(
        <div className=''>
            <div className=''>
                 {tv.map((series) => (
                    <li className='' key={series.id}>
                        <div>
                          <h2 className='series-name'>{[series.title]} Season {series.season} {series.format}</h2><br />
                        </div>
                    </li>
    ))}
            </div>
        </div>
    )

}

export default Tv;