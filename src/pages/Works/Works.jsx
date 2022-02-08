import React, { useEffect, useState } from 'react';
import '../../styles/works.scss'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
    useParams,
  } from 'react-router-dom';
import DataWorks from '../../data/DataWorks';

const Works = () => {


    return (
        <div className='content-page-works'>
            <h1 className='our-project'>Our Project</h1>
            <h3>Au fil des années, nous avons pu accompagner les meilleurs.</h3>
            <h4>Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.</h4>
            <div className='card'>
                <h2>Test</h2>
                <button>En savoir plus</button>
            </div>
        </div>
    );
};

export default Works;