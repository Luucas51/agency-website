import React, { useContext, useState } from 'react';
import reactDom from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
  } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Works from './pages/Works/Works';
import './styles/index.scss';
import DarkMode from './components/DarkMode/DarkMode';
const App = () => {

    const [darkMode, setDarkMode] = useState(false)
    
    return (
        <div className={darkMode ? 'page-container dark-mode' : ' page-container light-mode'}>
            <Router>
                <DarkMode.Provider value={{
                    darkMode,
                    toggle: () => setDarkMode(!darkMode)
                }}>

                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/pages/about' element={<About/>} />
                    <Route path='/pages/works' element={<Works/>} />
                </Routes>
                </DarkMode.Provider>
            </Router>

        </div>
    );
};

reactDom.render(<App />, document.getElementById('root'));