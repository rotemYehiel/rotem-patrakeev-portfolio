import React, { useEffect, useState } from 'react';
import { useDeveloperContext } from '../context/DeveloperContext';
import PageHeader from '../components/PageHeader';
import TechSkillsList from '../components/TechSkillsList';

const About = () => {
    const [aboutDeveloper, setAboutDeveloper] = useState(null);
    const developer = useDeveloperContext();

    useEffect(() => {
        if (developer) {
            const aboutDeatails = developer.about;
            setAboutDeveloper(aboutDeatails)
        }

    }, [developer])

    if (!aboutDeveloper) return null

    return (
        <div className="about page-in-app info-page">
            <PageHeader pageName='About' />
            <div className="page-content about-content">
                <section className="about-me-text">
                    {aboutDeveloper.skills.map((skill, index) => (
                        <p key={index} className="skill-tag" style={{ textIndent: `${2 * (index + 1)}vw` }}>{`<${skill}>`}</p>
                    ))}
                    <div className="summary" style={{ marginLeft: `${2 * (aboutDeveloper.skills.length + 1)}vw` }}>
                        <h2 >Hi I'm {developer.name}</h2>
                        <p>{aboutDeveloper.summary}</p>
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


                    {aboutDeveloper.skills.map((skill, index) => (
                        <p key={index} className="skill-tag" style={{ textIndent: `${(2 * (aboutDeveloper.skills.length - index))}vw` }}>{`</${skill}>`}</p>
                    ))}
                </section>

                <TechSkillsList />
            </div>
        </div>
    )

}

export default About
