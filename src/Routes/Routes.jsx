import React from 'react'
import {BrowserRouter as Route, Router } from 'react-router-dom'
import Home from '../components/Home/Home'
import About from '../components/About/About'

const Routes = () => {
  return (
    <div>
        <Router>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
        </Router>
    </div>
  )
}

export default Routes