import javaScriptImg from '../assets/images/js.png'
import reactImg from '../assets/images/react.png';
import htmlImg from '../assets/images/html.png';
import cssImg from '../assets/images/css.png';
import nodeImg from '../assets/images/nodejs.png';
import npmImg from '../assets/images/npm.png';
import vueImg from '../assets/images/vue.png';
import sassImg from '../assets/images/sass.png';
import reduxImg from '../assets/images/redux.png';
import nextImg from '../assets/images/next.png';
import gitImg from '../assets/images/git.png';
import mongodbImg from '../assets/images/mongodb.png';
import es6Img from '../assets/images/es6.png';
import matirialuiImg from '../assets/images/matirialui.png';
import bootstrapImg from '../assets/images/bootstrap.png';

const TechSkillsList = () => {
    const techSkills = [
        {
            name: 'java script',
            img: javaScriptImg
        },
        {
            name: 'html',
            img: htmlImg
        },
        {
            name: 'css',
            img: cssImg
        },
        {
            name: 'node js',
            img: nodeImg
        },
        {
            name: 'react js',
            img: reactImg
        },
        {
            name: 'npm',
            img: npmImg
        },
        {
            name: 'vue js',
            img: vueImg
        },
        {
            name: 'sass',
            img: sassImg
        },
        {
            name: 'redux',
            img: reduxImg
        },
        {
            name: 'next',
            img: nextImg
        },
        {
            name: 'git',
            img: gitImg
        },
        {
            name: 'mongodb',
            img: mongodbImg
        },
        {
            name: 'es6',
            img: es6Img
        },
        {
            name: 'matirialui',
            img: matirialuiImg
        },
        {
            name: 'bootstrap',
            img: bootstrapImg
        }
    ]
    return (
        <div className="tech-skills-list">
            <ul className="tech-skills">
                {techSkills.map((skill, index) => (
                    <li key={index}>
                        <img className="skill-img" src={skill.img} alt={skill.name} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TechSkillsList;