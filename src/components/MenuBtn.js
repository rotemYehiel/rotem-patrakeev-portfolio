import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { toggalMenu } from '../actions/AppAction';

const MenuBtn = () => {
    const isMenuOpen = useSelector(state => state.app.isMenuOpen);
    const dispatch = useDispatch()
    const onClickMenu = () => {
        document.getElementById("menu").classList.toggle("change");
        dispatch(toggalMenu())
    }

    return (
        <div className="menu-btn">
            <div id="menu-bar">
                <div id="menu" onClick={() => onClickMenu()} className={isMenuOpen ? "change" : ''}>
                    <div id="bar1" className="bar"></div>
                    <div id="bar2" className="bar"></div>
                    <div id="bar3" className="bar"></div>
                </div>
            </div>
        </div>
    )
}

export default MenuBtn;