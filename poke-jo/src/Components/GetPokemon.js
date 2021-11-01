import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { LOAD_POKEMONS } from '../GraphQl/Queries'
import { Waypoint } from 'react-waypoint'
import {Link} from 'react-router-dom'
import ToTop from './ToTop'
import pokeballbg from '../img/pokeball-bg.png'


export default function GetPokemon() {

    const gqlVariables = {
        limit: 32,
        offset: 0,
    };

    const { error, loading, data, fetchMore } = useQuery(LOAD_POKEMONS, {
        variables: gqlVariables
    });

    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        if(loading){
            console.log('loading');
            return <div>Loading..</div>
        }
        if (data) {
            setPokemons(data.pokemons.results)
        }
        
    }, [data]);



  

    return (
        <div className="pokemon-flex">
            <ToTop/>
            {pokemons.map((val, i) => {
                i = i++;
                var index = i + 1
                if (index.toString().length == 1) {
                    index = '00' + index
                }
                else if (index.toString().length == 2) {
                    index = '0' + index
                }
                return (
                        <Link key={index} to={"/pokedetail/"+val.name} className="pokemon-box" >
                            <img style={{ backgroundImage: `url(${pokeballbg})` }} className='bouncepoke' src={val.image} />
                            <p className="pokemon-name"><small>#{index} </small> {val.name}</p>
                            
                            {val.next !== null && i === pokemons.length-1 ?
                               
                               <Waypoint onEnter={()=> fetchMore({
                                   variables:{
                                    limit: i+30,
                                    offset: 0,
                                   }, updateQuery: (pv, {fetchMoreResult})=>{
                                    if(!fetchMoreResult){
                                        return {
                                            pv,
                                        }
                                    }
                                    return{
                                        ...pv,
                                        ...fetchMoreResult
                                    }
                                   }
                               })}/>  : null
                            }
                        </Link>

                );
            })}
              
        </div>
    )
}

