import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <NavLink to='/' className='navbar'>
            <img className='logo' src={assets.logo} alt="" />
            <img className='profile' src={assets.profile_image} alt="" />

        </NavLink>
    )
}

export default Navbar