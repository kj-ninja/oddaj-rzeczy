import React from 'react';
import './GiveAwayWarning.scss';
import Container from "react-bootstrap/Container";

const GiveAwayWarning = () => {
    return (
        <div className="give-away__warning">
            <Container className="give-away__warning--container">
                <h3>Ważne!</h3>
                <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
            </Container>
        </div>
    );
};
export default GiveAwayWarning;