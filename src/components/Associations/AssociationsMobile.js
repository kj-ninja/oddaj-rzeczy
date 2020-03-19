import React, {useState} from 'react';
import Button from "react-bootstrap/Button";

const AssociationsMobile = () => {
    const [association, setAssociation] = useState('foundations');
    const [isFoundationsActive, setIsFoundationsActive] = useState(true);
    const [isOrganizationsActive, setIsOrganizationsActive] = useState(false);
    const [isLocalsActive, setIsLocalsActive] = useState(false);
    let result;
    const styles = {
        padding: '0 40px 0 40px',
        margin: '0 auto',
        fontSize: '1.25rem'
    };

    const handleFoundations = () => {
        setAssociation('foundations');
        setIsFoundationsActive(true);
        setIsOrganizationsActive(false);
        setIsLocalsActive(false);
    };
    const handleOrganizations = () => {
        setAssociation('organizations');
        setIsFoundationsActive(false);
        setIsOrganizationsActive(true);
        setIsLocalsActive(false);
    };
    const handleLocals = () => {
        setAssociation('locals');
        setIsFoundationsActive(false);
        setIsOrganizationsActive(false);
        setIsLocalsActive(true);
    };

    if (association === 'foundations') {
        result = (
            <div style={styles}>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić
                czym się zajmują, komu pomagają i czego potrzebują.</div>
        )
    } else if (association === 'organizations') {
        result = (
            <div style={styles}>Pomagamy również wszelkim organizacjom pozarządowym i charytatywnym, które nie są Fundacjami. Są to
                nasi Partnerzy, który zrobią dobry pożytek z rzeczy, które do nich trafią.</div>
        )
    } else if (association === 'locals') {
        result = (
            <div style={styles}>Wspieramy lokalne zbiórki organizowane przez indywidualne osoby, którym zależy na dobru społeczności, w
                której żyją. Sam też możesz zorganizować taką zbiórkę i pomóc tym, którzy są najbliżej.</div>
        )
    }

    return (
        <section className="associations__mobile">
            <h2>Komu pomagamy?</h2>
            <img src={require("../../assets/Decoration.svg")} alt=""/>
            <div className="associations__mobile--buttons">
                <Button onClick={() => handleFoundations()} variant="outline-secondary" size="lg"
                        className={isFoundationsActive ? 'active' : ''}>Fundacjom</Button>
                <Button onClick={() => handleOrganizations()} variant="outline-secondary" size="lg"
                        className={isOrganizationsActive ? 'active' : ''}>Organizacjom pozarządowym</Button>
                <Button onClick={() => handleLocals()} variant="outline-secondary" size="lg"
                        className={isLocalsActive ? 'active' : ''}>Lokalnym zbiórkom</Button>
            </div>
            {result}
        </section>
    );
};
export default AssociationsMobile;