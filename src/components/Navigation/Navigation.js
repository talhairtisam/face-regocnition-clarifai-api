import React from 'react';
import Menu from '../Menu/Menu';
import Profile from '../Profile/Profile';


const Navigation = () => {
    return (
        <div className="Navigation">
            <Profile />
            <h1>Talha Irtisam <br /> #5 </h1>
            <Menu />
        </div>
    );
}

export default Navigation;