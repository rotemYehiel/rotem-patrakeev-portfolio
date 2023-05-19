import Navbar from './Navbar';
import LinksBar from './LinksBar';
import MenuBtn from './MenuBtn';

const MainHeader = (props) => {
    const { developer, isMenuOpen } = props;

    if (!developer) return
    return (
        <div className="main-header">

            <div className="header-narrow">
                <MenuBtn />
                <h1 className="dev-name">{developer.name}</h1>
            </div>

            <div className={`menu ` + (isMenuOpen ? 'show-menu' : 'close-menu')} >

                <div className="img-container header-item">
                    <img className="developer-img" src={developer.developerImg} alt="profill pic" />
                </div>
                <section className="header-main-text header-item">
                    <h1>{developer.name}</h1>
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