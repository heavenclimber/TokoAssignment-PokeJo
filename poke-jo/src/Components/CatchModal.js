import React, { useState } from 'react'
import SuccessCaught from './SuccessCaught'
import FailedCaught from './FailedCaught'
export default function CatchModal({ name, data, closeModal }) {


    const [pokeThrow, setThrow] = useState(true)
    const [modalShow, setModal] = useState(false)

    const caught = Math.random() < 0.5
    setTimeout(() => {
        setThrow(false);
        setModal(true);
    }, 3000)

    // const SuccessCaught = () => (
    //     <div className='caughtInfo'>
    //         <h2>CONGRATULATIONS!</h2>
    //         <p>You've Caught <span>{name}</span>!</p>
    //         <input className='inputNickname' onInput={e=>setNickname(e.target.value)} type="text" name="name" placeholder="Give your new friend a nickname" />
    //         <button onClick={() => setPoke(data)}>Add him to your family</button>
    //     </div>
    // )

    // const FailedCaught = () => (
    //     <div className='caughtInfo'>
    //         <h2>OH, SNAP!</h2>
    //         <p>The <span>{name}</span> has Fled!</p>
    //         <button onClick={() => closeModal(false)}>There'll be another chance!</button>
    //     </div>
    // )

    return (
        <div className='catchModalContainer'>
            {modalShow && <div className='catchModal'>
                {caught ? <SuccessCaught name={name} data={data}  closeModal={closeModal}/> : <FailedCaught name={name} closeModal={closeModal} />}
            </div>}
            {pokeThrow && <div className="pokeball">
                <div className="pokeball__button"></div>
            </div>}

        </div>
    )
}
