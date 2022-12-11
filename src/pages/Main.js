import React from 'react';
import Films from '../components/Films/Films';

function Main(){
    return(
<div className='bg-darkpurple'>
        <h3 className='text-white text-2xl'> Click on the appropriate category above  to see the movies I have, let's have a movie night!</h3>
            <Films />
       
</div>
    )
}

export default Main;