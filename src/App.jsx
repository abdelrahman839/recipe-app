import React, { useState } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Contact from './components/Contact/Contact.jsx'
import Home from './components/Home/Home.jsx'
import Ingredients from './components/Ingredients/Ingredients.jsx'
import Navber from './components/Navbar/Navber.jsx'
function App() {
    const [ingredients, setIngredients] = useState([])
    function getIngredients(item) {
        setIngredients(item);
    }

    return (
        <>
            <Navber />
            <Switch>
                <Route path="/home"> <Home getIngredients={getIngredients} /> </Route>
                <Route path="/ingredients" > <Ingredients Ingredients={ingredients} /> </Route>
                <Route path="/contact" component={Contact} />
                <Redirect from="/" to="/home" />

            </Switch>

        </>
    )
}

export default App
