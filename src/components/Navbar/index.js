import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
} from './NavbarElements';

const Navbar = () => {
return (
    <>
    <Nav className='navBar'>
        <Bars />
        <NavMenu className='navElements'>
            <NavLink to='/'>
                    home
                </NavLink>
            <NavLink to='/hero'>
                about
            </NavLink>
            <NavLink to='/Products'>
                all tours
            </NavLink>
            <NavLink to='/learn'>
                learn more
            </NavLink>
        </NavMenu>
        </Nav>
    </>
    );
};

export default Navbar;