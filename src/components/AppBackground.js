import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons'

const AppBackground = () => {
    return (
        <div className="app-background">
            <div className="wrap">
                <FontAwesomeIcon icon={['fab', 'js-square']} className="icon" />
                <FontAwesomeIcon icon={['fab', 'css3-alt']} className="icon" />
                <FontAwesomeIcon icon={['fab', 'html5']} className="icon" />
                <FontAwesomeIcon icon={['fab', 'react']} className="icon" />
                <FontAwesomeIcon icon={['fab', 'vuejs']} className="icon" />
                <FontAwesomeIcon icon={['fab', 'bootstrap']} className="icon" />
                <FontAwesomeIcon icon={['fab', 'node']} className="icon" />
                <FontAwesomeIcon icon={['fab', 'npm']} className="icon" />
                <FontAwesomeIcon icon={['fab', 'git-alt']} className="icon" />
                <FontAwesomeIcon icon={['fab', 'sass']} className="icon" />
                <FontAwesomeIcon icon={faCode} className="icon" />
            </div>
        </div>
    )
}

export default AppBackground;