import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import LinksBar from './LinksBar';
import MenuBtn from './MenuBtn';
import { useDeveloperContext } from '../context/DeveloperContext';


const MainHeader = (props) => {
    const { isMenuOpen } = props;
    const developer = useDeveloperContext();

    if (!developer) return null

    return (
        <div className="main-header">

            <div className="header-narrow">
                <MenuBtn />
                <Link className="dev-name" to="/rotem-patrakeev-portfolio" >{developer.name}</Link>
            </div>

            <div className={`menu ` + (isMenuOpen ? 'show-menu' : 'close-menu')} >

                <div className="img-container header-item">
                    <Link to="/rotem-patrakeev-portfolio">
                        <img className="developer-img" src={developer.developerImg} alt="profill pic" />
                    </Link>
                </div>
                <section className="header-main-text header-item">
                    <Link to="/rotem-patrakeev-portfolio"><h1>{developer.name}</h1></Link>
                    <h2>{developer.profession}</h2>
                </section>
                <div className="navbar-in-header">
                    <Navbar className="header-item" email={developer.email} />
                </div>
                <div className="linksbar-in-header">
                    <LinksBar />
                </div>

            </div>

        </div>
    )
}

export default MainHeader;