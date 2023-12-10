import React from 'react';
import "./NavBar.css"
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
            <header className='header'>
                <nav className='NavBar'>
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="/checkout" >checkout</NavLink>
                    <NavLink to="/registro" >Registro</NavLink>
                    <NavLink to="/login" >login</NavLink>
                    <NavLink to="/perfil" >perfil</NavLink>
                    <NavLink to="/producto" >producto</NavLink>
                    <NavLink to="/productos" >productos</NavLink>
                </nav>
            </header>

    )
}

export default NavBar