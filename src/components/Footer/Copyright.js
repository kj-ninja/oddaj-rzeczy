import React from 'react';
import './Copyright.scss';

const Copyright = () => {
    return (
        <div className="footer__copyright">
            <span>Copyright by <a href="https://github.com/kj-ninja">KJ-ninja</a></span>
            <ul>
                <li><a href="/"><img src={require('../../assets/Facebook.svg')} alt='facebook icon'/></a></li>
                <li><a href="/"><img src={require('../../assets/Instagram.svg')} alt='instagram icon'/></a></li>
            </ul>
        </div>
    );
};
export default Copyright;