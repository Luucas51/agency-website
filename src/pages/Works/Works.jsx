import React from 'react';
import '../../styles/works.scss'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
  } from 'react-router-dom';


const Works = () => {
    return (
        <div className='content-page-works'>
            <h1 className='our-project'>Our projects</h1>
             {/* <Router>
                 <Routes>
                     <Route path='/pages/works/' />
                 </Routes>
             </Router> */}
            
        </div>
    );
};

export default Works;