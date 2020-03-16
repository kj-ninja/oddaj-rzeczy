import React, {useState} from 'react';
import Button from "react-bootstrap/Button";

const AssociationsDesktop = ({result, setAssociation, setCurrentPage}) => {
    const [isFoundationsActive, setIsFoundationsActive] = useState(true);
    const [isOrganizationsActive, setIsOrganizationsActive] = useState(false);
    const [isLocalsActive, setIsLocalsActive] = useState(false);

    const handleFoundations = () => {
        setCurrentPage(1);
        setAssociation('foundations');
        setIsFoundationsActive(true);
        setIsOrganizationsActive(false);
        setIsLocalsActive(false);
    };
    const handleOrganizations = () => {
        setCurrentPage(1);
        setAssociation('organizations');
        setIsFoundationsActive(false);
        setIsOrganizationsActive(true);
        setIsLocalsActive(false);
    };
    const handleLocals = () => {
        setCurrentPage(1);
        setAssociation('locals');
        setIsFoundationsActive(false);
        setIsOrganizationsActive(false);
        setIsLocalsActive(true);
    };

    return (
        <section className="associations__desktop">
            <h2>Komu pomagamy?</h2>
            <img src={require("../../assets/Decoration.svg")} alt=""/>
            <div className="associations__desktop--buttons">
                <Button onClick={() => handleFoundations()} variant="outline-secondary" size="lg" className={isFoundationsActive ? 'active' : ''}>Fundacjom</Button>
                <Button onClick={() => handleOrganizations()} variant="outline-secondary" size="lg" className={isOrganizationsActive ? 'active' : ''}>Organizacjom pozarządowym</Button>
                <Button onClick={() => handleLocals()} variant="outline-secondary" size="lg" className={isLocalsActive ? 'active' : ''}>Lokalnym zbiórkom</Button>
            </div>
            {result}
        </section>
    );
};

export default AssociationsDesktop;