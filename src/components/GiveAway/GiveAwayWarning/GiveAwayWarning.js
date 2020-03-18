import React from 'react';
import './GiveAwayWarning.scss';
import Container from "react-bootstrap/Container";

const GiveAwayWarning = ({step}) => {
    let warningMessage;

    if (step === 'stepOne') {
        warningMessage = (
            <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
        )
    } else if (step === 'stepTwo') {
        warningMessage = (
            <p>Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.</p>
        )
    } else if (step === 'stepThree') {
        warningMessage = (
            <p>Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.</p>
        )
    } else if (step === 'stepFour') {
        warningMessage = (
            <p>Podaj adres oraz termin odbioru rzeczy.</p>
        )
    }

    return (
        <div className="give-away__warning">
            <Container className="give-away__warning--container">
                <h3>Ważne!</h3>
                {warningMessage}
            </Container>
        </div>
    );
};
export default GiveAwayWarning;