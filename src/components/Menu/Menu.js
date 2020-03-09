import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import './Menu.scss';
import Container from "react-bootstrap/Container";
import {Link} from 'react-router-dom';

const Menu= () => {
    return (
        <Container style={{maxWidth: '1500px'}}>
            <Navbar fixed="top" bg="light" expand="lg" className="navbar__mobile">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <div className="navbar__buttons-container--mobile">
                    <Link to="/logowanie"><Button variant="outline-primary">Zaloguj</Button></Link>
                </div>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Start</Nav.Link>
                        <Nav.Link href="#link">O co chodzi?</Nav.Link>
                        <Nav.Link href="#link">O nas</Nav.Link>
                        <Nav.Link href="#link">Fundacja i organizacje</Nav.Link>
                        <Nav.Link href="#link">Kontakt</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <div className="navbar__buttons-container--desktop">
                <Link to="/logowanie"><Button variant="outline-secondary">Zaloguj</Button></Link>
                <Link to="/rejestracja"><Button variant="outline-secondary">Załóż konto</Button></Link>
            </div>
            <Nav className="justify-content-end navbar__desktop">
                <Nav.Item>
                    <Nav.Link href="/home">Start</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">O co chodzi?</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">O nas</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Fundacja i organizacje</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Kontakt</Nav.Link>
                </Nav.Item>
            </Nav>
        </Container>
    );
};

export default Menu;