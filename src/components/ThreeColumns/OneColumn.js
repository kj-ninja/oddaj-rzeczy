import React from 'react';
import Col from "react-bootstrap/Col";

const OneColumn = ({quantity, events}) => {
    return (
        <Col md={12} lg={4}>
            <div className="three-columns__column">
                <h3>{quantity}</h3>
                <div>{events}</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra
                    elementuma. Aliquam erat volutpat.</p>
            </div>
        </Col>
    );
};
export default OneColumn;