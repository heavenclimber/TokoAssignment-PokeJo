import React, { useState, useEffect } from 'react'

const SuccessCaught = ({ name, data, closeModal }) => {
    const [nick, setNickname] = useState('')
    const [mypokedata, setMyPoke] = useState({})
    if (nick !== '') {
        data.name = nick
    }
    let realdata = []
    let newdata = []
    let resultdata=[]



    useEffect(() => {
        let getdata = localStorage.getItem('MyPokemon')
        if (!getdata) {
            localStorage.setItem('MyPokemon', [])
            getdata = localStorage.getItem('MyPokemon')
            resultdata=[data]
        }
        else  {
            realdata = JSON.parse(getdata)
            newdata = [data]
            resultdata = [ ...realdata, ...newdata ]
        }
    })


    const setDataPokemon = () => {     
        localStorage.setItem('MyPokemon', JSON.stringify(resultdata))
        closeModal(false)
    }

    return (
        <div className='caughtInfo'>
            <h2>CONGRATULATIONS!</h2>
            <p>You've Caught <span>{name}</span>!</p>
            <input className='inputNickname' onInput={e => setNickname(e.target.value)} type="text" name="name" placeholder="Give your new friend a nickname" />
            <button onClick={setDataPokemon}>Add him to your family</button>
        </div>
    )
}

export default SuccessCaught