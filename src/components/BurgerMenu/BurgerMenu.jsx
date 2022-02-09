import React from 'react';
import { Link } from 'react-router-dom';

const BurgerMenu = () => {
    return (
        <div className='burger-menu-div'>
                <Link className='link-burger-menu first after' to='/'>Home</Link>
                <Link className='link-burger-menu first after' to='/pages/about'>About</Link>
                <Link className='link-burger-menu first after' to='/pages/works' >Works</Link>
        </div>
    );
};

export default BurgerMenu;