import React, { useEffect, useState } from 'react';
import { useDeveloperContext } from '../context/DeveloperContext';
import PageHeader from '../components/PageHeader';
import ICON_BY_COMPANY from '../consts/IconByCompany';

const Experience = () => {
    const [developerExperience, setDeveloperExperience] = useState(null);
    const developer = useDeveloperContext();

    useEffect(() => {
        if (developer) {
            const experienceDeatails = developer.experience;
            setDeveloperExperience(experienceDeatails)
        }

    }, [developer])

    if (!developerExperience) return null;

    return (
        <div className="experience page-in-app info-page">
            <PageHeader pageName='Experience' />
            <div className="page-content experience-content">
                <div className='wrapper'>
                    <div className='timeline'>
                        {developerExperience.map((experience, index) => {
                            const { companyName, companyType, period, rule, description, projects } = experience;
                            const leftContainer = index % 2 === 0
                            return (
                                <div className={`container ${leftContainer ? 'left-container' : 'right-container'}`} key={`experience-${index}`}>
                                    <img src={ICON_BY_COMPANY[companyName]} alt={companyName} />
                                    <div className="text-box">
                                        <h2>{companyName} {companyType ? `(${companyType})` : ''}- {rule}</h2>
                                        <small>{period}</small>
                                        <p>{description}</p>
                                        {projects.length > 0 && (
                                            <>
                                                <br />
                                                <h3>Projects I were participated:</h3>
                                                <ul className="projects">
                                                    {projects.map((project, index) => (
                                                        <li className='buttons' key={`${project.projectName}-${index}`}>
                                                            <a href={project.link} target='_blanck'>{project.projectName}</a>
                                                        </li>
                                                    )
                                                    )}
                                                </ul>
                                            </>
                                        )}
                                        < span className={leftContainer ? 'left-container-arrow' : 'right-container-arrow'} />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Experience
