import React from 'react'
import GetPokemon from './GetPokemon'
import DisplayPokemon from './DisplayPokemon'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function Nav() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/pokelist" component={GetPokemon} />
                <Route path={"/pokedetail"} component={DisplayPokemon}/> 
            </Switch>

        </Router>
    )
}

const Home = () => (
    <GetPokemon />
)

export default Nav
