import React, {useState} from 'react';
import './GiveAway.scss';
import Menu from "../Header/Menu/Menu";
import * as firebase from "firebase";
import GiveAwaySteps from "./GiveAwaySteps/GiveAwaySteps";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer/Footer";

const GiveAway = () => {
    const [loggedUser, setLoggedUser] = useState(null);

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log('zalogowano');
            setLoggedUser(user);
        } else {
            setLoggedUser(null);
        }
    });

    return (
        <section className="give-away">
            <Menu loggedUser={loggedUser} />
                <Container className="give-away__container">
                    <Row>
                        <Col lg={6} className="give-away__image"/>
                        <Col lg={6} className="give-away__info">
                            <h2>Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM</h2>
                            <img src={require('../../assets/Decoration.svg')} alt=""/>
                            <p>Wystarczą 4 proste kroki:</p>
                            <div className="give-away__diamonds">
                                <div className="give-away__diamond"><span className="diamond__number">1</span><span>Wybierz rzeczy</span></div>
                                <div className="give-away__diamond"><span className="diamond__number">2</span><span>Spakuj je w worki</span></div>
                                <div className="give-away__diamond"><span className="diamond__number">3</span><span>Wybierz fundację</span></div>
                                <div className="give-away__diamond"><span className="diamond__number">4</span><span>Zamów kuriera</span></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            <GiveAwaySteps/>
            <Footer/>
        </section>
    );
};
export default GiveAway;