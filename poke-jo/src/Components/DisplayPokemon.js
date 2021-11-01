import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { LOAD_POKEMONS_DETAIL } from '../GraphQl/Queries'
import Skeleton from './skeleton'
import pokeballbg from '../img/pokeball-bg.png'
import CatchModal from './CatchModal'
import CatchBar from './CatchBar'

export default function DisplayPokemon() {


    let currLink = window.location.pathname.split("/");
    const currPoke = currLink[2];

    const gqlVariablesDetail = {
        name: currPoke,
    };

    const { error, loading, data } = useQuery(LOAD_POKEMONS_DETAIL, {
        variables: gqlVariablesDetail
    });



    const [pokemon, setPokemonsDetail] = useState([])
    const [pokeapidetail, setPokeApiDetail] = useState([])
    const [openModal, setOpenModal] = useState(false)
    


    let pokeApi = 'https://pokeapi.co/api/v2/pokemon/';


    useEffect(() => {

        if (loading) {
            return <div>Loading..</div>
        }
        if (data) {
            setPokemonsDetail(data.pokemon)
            pokeApi = pokeApi + data.pokemon.id

            const fetchDataApi = async () => {
                const res = await fetch(
                    pokeApi,
                );
                const json = await res.json();

                setPokeApiDetail(json)
            };
            fetchDataApi();

        }
    }, [data]);
    

    const GetMoves = () => (
        <div>
            <div className='movesdetail'>
                {pokemon.moves.map((val, i) => {
                    return (
                        <div key={i}>
                            {val.move.name}
                        </div>
                    )
                })}

            </div>
        </div>
    )

    const GetTypes = () => (
        <div>
            <div className="typesdetail">
                {pokemon.types.map((val, i) => {
                    let colortype = 'black'
                    if (val.type.name === 'bug') {
                        colortype = '#A8B820'
                    }
                    else if (val.type.name === 'dark') {
                        colortype = '#705848'
                    }
                    else if (val.type.name === 'dragon') {
                        colortype = '#7038F8'
                    }
                    else if (val.type.name === 'electric') {
                        colortype = '#F8D030'
                    }
                    else if (val.type.name === 'fairy') {
                        colortype = '#EE99AC'
                    }
                    else if (val.type.name === 'fighting') {
                        colortype = '#C03028'
                    }
                    else if (val.type.name === 'fire') {
                        colortype = '#F08030'
                    }
                    else if (val.type.name === 'flying') {
                        colortype = '#A890F0'
                    }
                    else if (val.type.name === 'ghost') {
                        colortype = '#705898'
                    }
                    else if (val.type.name === 'grass') {
                        colortype = '#78C850'
                    }
                    else if (val.type.name === 'ground') {
                        colortype = '#E0C068'
                    }
                    else if (val.type.name === 'ice') {
                        colortype = '#98D8D8'
                    }
                    else if (val.type.name === 'normal') {
                        colortype = '#A8A878'
                    }
                    else if (val.type.name === 'poison') {
                        colortype = '#A040A0'
                    }
                    else if (val.type.name === 'psychic') {
                        colortype = '#F85888'
                    }
                    else if (val.type.name === 'rock') {
                        colortype = '#B8A038'
                    }
                    else if (val.type.name === 'steel') {
                        colortype = '#B8B8D0'
                    }
                    else if (val.type.name === 'water') {
                        colortype = '#6890F0'
                    }
                    return (
                        <div style={{
                            backgroundColor: colortype
                        }} key={i}>
                            {val.type.name}
                        </div>
                    )
                })}

            </div>
        </div>
    )

    const GetStats = () => (
        <table className='statContainer'>
            <tbody>
                {pokeapidetail.stats.map((val, i) => {
                    return (
                        <tr key={i}>
                            <td>{val.stat.name}</td>
                            <td><b>{val.base_stat}</b></td>
                        </tr>
                    )
                })}
            </tbody>

        </table>
    )

    const GetInfo = () => (
        <div className='infodetailContainer'>
            <div className="infodetail">
                <div style={{ display: 'flex', gap: '20px' }}>
                    <p><b>Weight: </b>{pokeapidetail.weight/10} kg</p>
                    <p><b>Height: </b> {pokeapidetail.height/10}m</p>
                </div>
                <p className='abilitiesTitle'><b>Abilities: </b></p>
                <div className='abilities'>
                    {pokeapidetail.abilities.map((val, i) => {

                        return (
                            <div className='abilitiesName' key={i}>
                                {val.ability.name}
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )

    const GetSprites = () => (
        <div className="detailSpriteContainer">
            <div className="detailSprite">
                <img style={{ backgroundImage: `url(${pokeballbg})` }} srcSet={pokeapidetail.sprites.front_default} />
            </div>
            <h2>{pokemon.name}</h2>
        </div>
    )

    return (
        <div>
            <div className='detailFlex'>
                {pokeapidetail.sprites ? <GetSprites /> : <Skeleton skeleclass='typesdetail skele' />}
                {pokemon.types ? <GetTypes /> : <Skeleton skeleclass='typesdetail skele' />}
                <div className='infonstats'>
                    {pokeapidetail.weight ? <GetInfo /> : <Skeleton skeleclass='typesdetail skele' />}
                    {pokeapidetail.stats ? <GetStats /> : <Skeleton skeleclass='typesdetail skele' />}
                </div>
                <h2>Moves</h2>
                {pokemon.moves ? <GetMoves /> : <Skeleton skeleclass='movesdetail skele' />}
                <CatchBar  openModal={setOpenModal} />
            </div>
            {openModal && <CatchModal name={pokemon.name} data={pokeapidetail} closeModal={setOpenModal} />}
        </div>
    )
}

