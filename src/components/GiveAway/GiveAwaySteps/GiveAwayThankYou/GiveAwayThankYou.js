import React from 'react';
import './GiveAwayThankYou.scss';

const GiveAwayThankYou = () => {
    return (
        <div className="give-away__thank-you">
            <p>Dziękujemy za przesłanie formularza Na maila prześlemy wszelkie informacje o odbiorze.</p>
            <img src={require('../../../../assets/Decoration.svg')} alt=""/>
        </div>
    );
};

export default GiveAwayThankYou;