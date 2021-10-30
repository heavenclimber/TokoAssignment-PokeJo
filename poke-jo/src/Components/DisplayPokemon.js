import React, { useEffect, useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import { LOAD_POKEMONS_DETAIL } from '../GraphQl/Queries'
import Skeleton from './skeleton'

export default function DisplayPokemon() {

    
    let currLink = window.location.pathname.split("/");
    const currPoke= currLink[2];

    const gqlVariablesDetail = {
        name: currPoke,
    };

    const { error, loading, data } = useQuery(LOAD_POKEMONS_DETAIL, {
        variables: gqlVariablesDetail
    });

    const [pokemon, setPokemonsDetail] = useState([])

    useEffect(() => {
        if (loading) {
            return <div>Loading..</div>
        }
        if (data) {
            setPokemonsDetail(data.pokemon)
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
                    return (
                        <div  key={i}>
                            {val.type.name}
                        </div>
                    )
                })}

            </div>
        </div>
    )

    return (
        <div className='detailFlex'>
            <h2>Type</h2>
            {pokemon.types ? <GetTypes /> : <Skeleton skeleclass='typesdetail skele' />}
            <h2>Moves</h2>
            {pokemon.moves ? <GetMoves /> : <Skeleton skeleclass='movesdetail skele' />}

        </div>
    )
}

