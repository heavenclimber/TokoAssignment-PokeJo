import React from 'react'
import GetPokemon from './GetPokemon'
import DisplayPokemon from './DisplayPokemon'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function Nav() {
    return (
        <Router>
            <div className='navbar'>
                <Link to={"/pokelist/"}>
                    <h2>Poke-Jo</h2>
                </Link>

            </div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/pokelist" component={GetPokemon} />
                <Route path={"/pokedetail"} component={DisplayPokemon} />
            </Switch>

        </Router>
    )
}

const Home = () => (
    <GetPokemon />
)

export default Nav
