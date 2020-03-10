import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './ThreeColumns.scss';

const ThreeColumns = () => {
    return (
        <div className="three-columns__background">
            <Container className="three-columns__container">
                <Row>
                    <Col md={12} lg={4}>
                        <div className="three-columns__column">
                            <h2>10</h2>
                            <div>ODDANYCH WORKÓW</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra
                                elementuma. Aliquam erat volutpat.</p>
                        </div>
                    </Col>
                    <Col md={12} lg={4}>
                        <div className="three-columns__column">
                            <h2>10</h2>
                            <div>ODDANYCH WORKÓW</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra
                                elementuma. Aliquam erat volutpat.</p>
                        </div>
                    </Col>
                    <Col md={12} lg={4}>
                        <div className="three-columns__column">
                            <h2>10</h2>
                            <div>ODDANYCH WORKÓW</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra
                                elementuma. Aliquam erat volutpat.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ThreeColumns;