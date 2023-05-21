import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import PageHeader from '../components/PageHeader';
import TechSkillsList from '../components/TechSkillsList';

import KarmaShoppingIcon from '../assets/icons/karma_shopping_icon.jpeg'
import YitIcon from '../assets/icons/yit_logo.jpeg'
import AdworksIcon from '../assets/icons/adworks_ltd_icon.jpeg'
import MarmanetIcon from '../assets/icons/marmanet_icon.jpeg'
import NandJIcon from '../assets/icons/n_and_j_icon.jpeg'

const Experience = () => {
    const [developerExperience, setDeveloperExperience] = useState('')
    const developer = useSelector(state => state.data.developerDetails)
    const iconsByCompany = {
        "Karma shopping": KarmaShoppingIcon,
        "YIT": YitIcon,
        "Adworks Ltd": AdworksIcon,
        "Marmanet": MarmanetIcon,
        "N & J Industrial Food Machinery LTD": NandJIcon

    }

    useEffect(() => {
        if (developer) {
            const experienceDeatails = developer.experience;
            setDeveloperExperience(experienceDeatails)
        }

    }, [developer])
    if (developerExperience) {
        return (
            <div className="experience page-in-app info-page">
                <PageHeader pageName='Experience' />
                <div className="page-content experience-content">
                    <div className='wrapper'>
                        <div className='timeline'>
                            {developerExperience.map((experience, index) => {
                                const { companyName, companyType, period, rule, description, projects } = experience;
                                const leftContainer = index % 2 == 0
                                return (
                                    <div className={`container ${leftContainer ? 'left-container' : 'right-container'}`} key={`experience-${index}`}>
                                        <img src={iconsByCompany[companyName]} />
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
    } else {
        return ''
    }


}

export default Experience
