import React from 'react';
import { useParams } from 'react-router-dom';
import DataWorks from '../../data/DataWorks';
import '../../styles/works.scss'

const StudyCase = () => {

    const { company } = useParams();
    const removeCompany = company.substring(0, company.indexOf('-'))[0].toUpperCase() + company.substring(0, company.indexOf('-')).substring(1);

    const companyDetails = DataWorks.find(data => data.project === removeCompany);
    return (
        <div className='study-case'>
            <h3 className='title-study-case'>{companyDetails.title}</h3>
            <p className='desc-study-case'>{companyDetails.description}</p>
        </div>
    );
};

export default StudyCase;