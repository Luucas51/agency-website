import React, { useContext, useEffect, useState } from 'react';
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
import StudyCase from './components/StudyCase/StudyCase';


const App = () => {

    
    
    if(localStorage.getItem('saveValueDarkMode') === null){
        localStorage.setItem('saveValueDarkMode', 'false')
    }
    
    let statusBooleanDarkMode = localStorage.getItem('saveValueDarkMode') === 'false' ? false : true;
    const [darkMode, setDarkMode] = useState(statusBooleanDarkMode)

    useEffect(() => {
        localStorage.setItem('saveValueDarkMode', darkMode);
    }, [darkMode])


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
                    <Route path='/pages/works' element={<Works/>}>
                        <Route path='/pages/works/:company' element={<StudyCase/>} />
                    </Route>
                </Routes>
                </DarkMode.Provider>
            </Router>

        </div>
    );
};

reactDom.render(<App />, document.getElementById('root'));