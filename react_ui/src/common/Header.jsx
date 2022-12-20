import React, { Component } from 'react'
import Nav from './Nav'
import Home from '../components/Home'
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";

class Header extends Component {
  render() 
    {
    return (
            <>
            <Router>
                <Nav />
                    <Routes>
                        <Route path="/" element={ <Home /> } />
                    </Routes>
                </Router>
            </>
        )
    }
}

export default Header
