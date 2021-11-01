import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import pokeballbg from '../img/pokeball-bg.png'
import nopoke from '../img/pokeopen.png'

export default function MyPokemon() {

    const dataPoke = localStorage.getItem('MyPokemon')

    const [pokemons, setPokemons] = useState([])
    const [releaseModal, setReleaseModal] = useState(false)
    const [currPoke, setCurrPoke] = useState([])
    const [indexPoke, setIndexPoke] = useState()


    useEffect(() => {
        // let poketemp =JSON.parse(dataPoke)
        let poketemp = JSON.parse(dataPoke)
        setPokemons(poketemp)


    }, [dataPoke])


    const DeletePoke = (val, i) => {
        setIndexPoke(i)
        setCurrPoke(val)
    }
    const DeletePokeFinal = () => {
        console.log('deleted')
        const pokeSend =pokemons.splice(indexPoke,1)
        setReleaseModal(false)
        localStorage.setItem('MyPokemon', JSON.stringify(pokemons))
    }


    const ReleasePokemon = () => {
        return (
            <div className='catchModalContainer'>
                <div className='catchModal'>
                    <div className='caughtInfo'>
                        <p>Are you sure you want to release <span>{currPoke.name}</span>?</p>
                        <div className='releaseModalButtons'>
                            <button onClick={()=>setReleaseModal(false)}>CANCEL</button>
                            <button onClick={()=>{DeletePokeFinal()}} className='releaseModalButton' >RELEASE</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    const DisplayPoke = () => (
        <div className='pokemon-flex'>
            {pokemons.map((val, i) => {
                return (
                    <div key={i} className='pokemon-box'>
                        <Link to={"/pokedetail/" + val.forms[0].name} thispoke={val}>
                            <img style={{ backgroundImage: `url(${pokeballbg})` }} className='bouncepoke' src={val.sprites.front_default} />
                            <p className="pokemon-name">{val.name}</p>
                        </Link>
                        <button onClick={() => { setReleaseModal(true); DeletePoke(val, i) }} className='releaseButton'>RELEASE</button>
                    </div>
                )
            })}

        </div>
    )

    const DisplayPokeCheck = () => (
        <div>
            {pokemons.length===0 ? <NoPoke/> : <DisplayPoke/>}
        </div>
    )

    const NoPoke = () => (
        <div className='noPokemonContainer'>
            <div className='noPokemon'>
                <img className='bouncecatch' src={nopoke} />
                <h3>NO ONE'S HERE</h3>
                <p>Go catch your first Pokemon!</p>
            </div>
        </div>
    )

    return (
        <div >
            <div className='detailFlex' style={{ marginBottom: 0 }}>
                <h2>My Pokemon</h2>
            </div>

            {pokemons ? <DisplayPokeCheck /> : <NoPoke />}
            {releaseModal && <ReleasePokemon />}
        </div>
    )
}
