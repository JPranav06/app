import React from 'react'
import { Link } from 'react-router-dom'
import {ShoppingCart} from "phosphor-react"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='links'>
            <Link to = "/app">Shop</Link>
            <Link to = "/cart"><ShoppingCart size={"32px"}/></Link>

        </div>

    </div>
  )
}

export default Navbar