import React, { useContext, useEffect, useState } from 'react';
import '../../styles/works.scss'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
    useParams,
    Outlet,
  } from 'react-router-dom';
import DataWorks from '../../data/DataWorks';
import StudyCase from '../../components/StudyCase/StudyCase';
import ContextOfWorks from '../../components/ContextOfWorks/ContextOfWorks';

const Works = () => {

    let testTest = DataWorks.map(i => i.project);
    console.log(testTest)

    return (
        <div className='content-page-works'>
            <h1 className='our-project'>Our Project</h1>
            <h3>Au fil des années, nous avons pu accompagner les meilleurs.</h3>
            <h4>Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.</h4>
            <div className='link-project'>
                {DataWorks.map(i =>  { return (
                    <div className='button-project'> 
                        <div><Link to={`${i.project.toLowerCase()}-study-case`} >{i.project}</Link></div>
                    </div>)
                })}
            </div>

            <Outlet/>
        </div>
    );
};

export default Works;