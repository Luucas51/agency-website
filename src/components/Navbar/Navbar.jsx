import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DarkMode from '../DarkMode/DarkMode';

const Navbar = (props) => {
    const nightMode = useContext(DarkMode)

    return (
            <div className='navbar'>
                <Link className='link-nav first after' to='/'>Home</Link>
                <Link className='link-nav first after' to='/pages/about'>About</Link>
                <Link className='link-nav first after' to='/pages/works' >Works</Link>
                <label className='switch'>
                    <input type="checkbox" className={`${DarkMode ? 'dark-mode' : 'light-mode'}`} onClick={nightMode.toggle} />
                    <span className='slider round'></span>
                </label>
            </div>
    )

};

export default Navbar;