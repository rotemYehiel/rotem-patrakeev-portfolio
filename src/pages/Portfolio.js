import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


import PageHeader from '../components/PageHeader';
import ProjectList from '../components/ProjectList';

const Portfolio = () => {
    const [projects, setProjects] = useState([])
    const developer = useSelector(state => state.data.developerDetails)
    useEffect(() => {
        if (developer) setProjects(developer.projects)

    }, [developer])
    return (
        <div className="portfolio page-in-app info-page">
            <PageHeader pageName='Portfolio' />
            <div className="page-content">
                <ProjectList projects={projects} />
            </div>
        </div>
    )
}

export default Portfolio
