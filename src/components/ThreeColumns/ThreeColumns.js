import React from 'react';
import './ThreeColumns.scss';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import OneColumn from "./OneColumn";

const ThreeColumns = () => {
    return (
        <div className="three-columns">
            <Container className="three-columns__container">
                <Row>
                    <OneColumn quantity={10} events="ODDANYCH WORKÓW" />
                    <OneColumn quantity={5} events="WSPARTYCH ORGANIZACJI" />
                    <OneColumn quantity={7} events="ZORGANIZOWANY ZBIÓREK" />
                </Row>
            </Container>
        </div>
    );
};

export default ThreeColumns;