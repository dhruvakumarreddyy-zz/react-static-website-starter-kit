import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "../home/Home"
import Products from "../products/Products"
import Navbar from "../navbar/Navbar"

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
      </div>
      <Switch>
        <Route path="/" exact component={Home} />>
        <Route path="/products" component={Products} />>
      </Switch>
    </Router>
  )
}

export default App

