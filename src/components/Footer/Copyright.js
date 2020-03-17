import React from 'react';
import './Copyright.scss';

const Copyright = () => {
    return (
        <div className="footer__copyright">
            <span>Copyright by KJ-ninja</span>
            <ul>
                <li><a href="/"><img src={require('../../assets/Facebook.svg')} alt=''/></a></li>
                <li><a href="/"><img src={require('../../assets/Instagram.svg')} alt=''/></a></li>
            </ul>
        </div>
    );
};
export default Copyright;