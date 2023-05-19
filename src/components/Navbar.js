import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { toggalMenu } from '../actions/AppAction';

const Navbar = ({ email }) => {
    const dispatch = useDispatch()

    return (
        <div className="navbar header-item">
            <Link className="nav-link" to="/rotem-patrakeev-portfolio" onClick={() => dispatch(toggalMenu())}>Home</Link>
            <Link className="nav-link" to="/rotem-patrakeev-portfolio/About" onClick={() => dispatch(toggalMenu())}>About</Link>
            <Link className="nav-link" to="/rotem-patrakeev-portfolio/Experience" onClick={() => dispatch(toggalMenu())}>Experience</Link>
            {/* <Link className="nav-link" to="/Portfolio" onClick={() => dispatch(toggalMenu())}>Portfolio</Link> */}
            {email && <a className="nav-link buttons" href={`mailto:${email}`} >Contact Me</a>}
        </div>
    )
}

export default Navbar
