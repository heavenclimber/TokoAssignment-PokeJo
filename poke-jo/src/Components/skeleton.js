import React from 'react'
import pokeload from '../img/pokeball.png'

const Skeleton=({skeleclass})=> {
    return (
        <div className={skeleclass}>
            <img className='bounce' srcSet={pokeload}/>
        </div>
    )
}

export default Skeleton
