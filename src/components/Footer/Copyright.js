import React from 'react';
import './Copyright.scss';

const Copyright = () => {
    return (
        <div className="footer__copyright">
            <span>Copyright by KJ-ninja</span>
            <ul>
                <li><a href=""><img src={require('../../assets/Facebook.svg')}/></a></li>
                <li><a href=""><img src={require('../../assets/Instagram.svg')}/></a></li>
            </ul>
        </div>
    );
};

export default Copyright;