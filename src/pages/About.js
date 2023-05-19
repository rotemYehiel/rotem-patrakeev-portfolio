import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import PageHeader from '../components/PageHeader';
import TechSkillsList from '../components/TechSkillsList';

const About = () => {
    const [aboutDeveloper, setAboutDeveloper] = useState('')
    const developer = useSelector(state => state.data.developerDetails)

    useEffect(() => {
        if (developer) {
            const aboutDeatails = developer.about;
            setAboutDeveloper(aboutDeatails)
        }

    }, [developer])
    if (aboutDeveloper) {
        return (
            <div className="about page-in-app info-page">
                <PageHeader pageName='About' />
                <div className="page-content about-content">
                    <section className="about-me-text">
                        {aboutDeveloper.skills.map((skill, index) => (
                            <p key={index} className="skill-tag" style={{ textIndent: `${2 * (index + 1)}vw` }}>{`<${skill}>`}</p>
                        ))}
                        <div className="summary" style={{ marginLeft: `${2 * (aboutDeveloper.skills.length + 1)}vw` }}>
                            <h2 >Hi I'm Rotem Patreakeev</h2>
                            <p>I'm a Fullstack Web Developer, Passionate about solving
                            daily challenges, in development , math or just a regolar board game.
                        </p>
                            <br />
                            <p className="skill-tag">{`<ul>`}<span className="text">Hobbies:</span></p>
                            <ul className="hobbies-list">
                                {aboutDeveloper.hobbies.map((hobby, index) => (
                                    <li key={index} className="skill-tag">
                                        <span>{`<li>`}</span><span className="hobby text">{hobby}</span><span>{`</li>`}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="skill-tag">{`</ul>`}</p>
                        </div>


                        {aboutDeveloper.skills.reverse().map((skill, index) => (
                            <p key={index} className="skill-tag" style={{ textIndent: `${(2 * (aboutDeveloper.skills.length - index))}vw` }}>{`</${skill}>`}</p>
                        ))}
                    </section>

                    <TechSkillsList />
                </div>
            </div>
        )
    } else {
        return ''
    }


}

export default About
