import React from 'react'
import GetPokemon from './GetPokemon'
import DisplayPokemon from './DisplayPokemon'
import MyPokemon from './MyPokemon'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import logocollection from '../img/bag.png'
import logoapp from '../img/pokejo.png'

function Nav() {
    return (
        <Router>
            <div className='navbar'>
                <div className='pokejoContainer'>
                    <Link to={"/pokelist/"}>
                        <img className='pokejo' src={logoapp} />
                    </Link>
                </div>
                <div>
                    <Link to={"/mypokemon/"}>
                        <img className='bagnav bouncemycollection' src={logocollection} />
                    </Link>
                </div>

            </div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/pokelist" component={GetPokemon} />
                <Route path={"/pokedetail"} component={DisplayPokemon} />
                <Route path={"/mypokemon"} component={MyPokemon} />
            </Switch>

        </Router>
    )
}

const Home = () => (
    <GetPokemon />
)

export default Nav
