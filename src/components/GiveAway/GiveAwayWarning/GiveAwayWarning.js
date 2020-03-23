import React from 'react';
import './GiveAwayWarning.scss';
import Container from "react-bootstrap/Container";

const GiveAwayWarning = ({step}) => {
    let warningMessage;

    if (step === 1) {
        warningMessage = (
            <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
        )
    } else if (step === 2) {
        warningMessage = (
            <p>Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.</p>
        )
    } else if (step === 3) {
        warningMessage = (
            <p>Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.</p>
        )
    } else if (step === 4) {
        warningMessage = (
            <p>Podaj adres oraz termin odbioru rzeczy.</p>
        )
    }

    return (
        <div className="give-away__warning">
            <Container className="give-away__warning--container">
                <h2>Ważne!</h2>
                {warningMessage}
            </Container>
        </div>
    );
};
export default GiveAwayWarning;