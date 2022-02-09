import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import DarkMode from '../DarkMode/DarkMode';
import { CgMenu } from 'react-icons/cg'
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Navbar = (props) => {
    const nightMode = useContext(DarkMode)

    const [boolBurger, setBoolBurger] = useState(false) 

    
    const clickBurgerMenu = () =>{
            setBoolBurger(!boolBurger)     
    }

    
    return (
        <div className={`${boolBurger ? 'navbar-burger' : 'navbar'} `}>
                <a href="/">
                <div className='title-head'>
                    <h1 className='title-nav'><span>Web</span> Agency</h1>                    
                </div>
                </a>
                <Link className='link-nav first after' to='/'>Home</Link>
                <Link className='link-nav first after' to='/pages/about'>About</Link>
                <Link className='link-nav first after' to='/pages/works' >Works</Link>
                <label className='switch'>
                    <input type="checkbox" className={`${DarkMode ? 'dark-mode' : 'light-mode'}`} onClick={nightMode.toggle} />
                    <span className='slider round'></span>
                </label>
                <CgMenu onClick={clickBurgerMenu} className='burger-menu' />
                {boolBurger && <BurgerMenu/>}
            </div>
    )

};

export default Navbar;