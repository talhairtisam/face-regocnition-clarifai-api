import React from 'react';
import { NavLink } from 'react-router-dom';


const Menu = () => {
    return (
        <div className="Menu">
            <ul className="menu-list">
                <NavLink to="/" >
                    <li>Log-Out</li>
                </NavLink>
            </ul>
        </div>
    );
}

export default Menu;