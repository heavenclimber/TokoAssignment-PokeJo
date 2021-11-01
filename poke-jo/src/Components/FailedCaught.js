import React from 'react'

const FailedCaught=({name, closeModal})=> {
    return (
        <div className='caughtInfo'>
            <h2>OH, SNAP!</h2>
            <p>The <span>{name}</span> has Fled!</p>
            <button onClick={() => closeModal(false)}>There'll be another chance!</button>
        </div>
    )
}

export default FailedCaught