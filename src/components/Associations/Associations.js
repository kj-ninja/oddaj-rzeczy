import React, {useEffect, useState} from 'react';
import Button from "react-bootstrap/Button";
import './Associations.scss';
import Foundations from "./ Foundations/Foundations";
import Pagination from "./Pagination/Pagination";
import Organizations from "./Organizations/Organizations";
import Locals from "./Locals/Locals";
import {fire, db} from '../Firebase/Firebase';

const Associations = () => {
    const [association, setAssociation] = useState('foundations');
    const [foundations, setFoundations] = useState([]);
    const [organizations, setOrganizations] = useState([]);
    const [locals, setLocals] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);
    const [isFoundationsActive, setIsFoundationsActive] = useState(true);
    const [isOrganizationsActive, setIsOrganizationsActive] = useState(false);
    const [isLocalsActive, setIsLocalsActive] = useState(false);

    useEffect(()=> {
        console.log('fetch');
        db.collection("foundations").get().then((DocumentSnapshot) => {
            DocumentSnapshot.forEach((doc) => {
                setFoundations(prevState => [...prevState, doc.data()]);
            });
        });
        db.collection("organizations").get().then((DocumentSnapshot) => {
            DocumentSnapshot.forEach((doc) => {
                setOrganizations(prevState => [...prevState, doc.data()]);
            });
        });
        db.collection("locals").get().then((DocumentSnapshot) => {
            DocumentSnapshot.forEach((doc) => {
                setLocals(prevState => [...prevState, doc.data()]);
            });
        });
    }, []);

    function getCurrentFoundation() {
        const indexOfLastFoundation = currentPage * postsPerPage;
        const indexOfFirstFoundation = indexOfLastFoundation - postsPerPage;
        return foundations.slice(indexOfFirstFoundation, indexOfLastFoundation);
    }
    function getCurrentOrganization() {
        const indexOfLastOrganization = currentPage * postsPerPage;
        const indexOfFirstOrganization = indexOfLastOrganization - postsPerPage;
        return organizations.slice(indexOfFirstOrganization, indexOfLastOrganization);
    }
    function getCurrentLocal() {
        const indexOfLastLocal = currentPage * postsPerPage;
        const indexOfFirstLocal = indexOfLastLocal - postsPerPage;
        return locals.slice(indexOfFirstLocal, indexOfLastLocal);
    }

    // Change page
    const handlePaginate = (pageNumber) => setCurrentPage(pageNumber);

    let result;
    if (association === 'foundations') {
        result = (
            <>
                <Foundations foundations={getCurrentFoundation()}/>
                <Pagination postsPerPage={postsPerPage} totalPosts={foundations.length} paginate={handlePaginate}/>
            </>
        )
    } else if (association === 'organizations') {
        result = (
            <>
                <Organizations organizations={getCurrentOrganization()}/>
                <Pagination postsPerPage={postsPerPage} totalPosts={organizations.length} paginate={handlePaginate}/>
            </>
        )
    } else if (association === 'locals') {
        result = (
            <>
                <Locals locals={getCurrentLocal()}/>
                <Pagination postsPerPage={postsPerPage} totalPosts={locals.length} paginate={handlePaginate}/>
            </>
        )
    }

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
        <section className="associations">
            <h2>Komu pomagamy?</h2>
            <img src={require("../../assets/Decoration.svg")} alt=""/>
            <div className="associations__buttons">
                <Button onClick={() => handleFoundations()} variant="outline-secondary" size="lg" className={isFoundationsActive ? 'active' : ''}>Fundacjom</Button>
                <Button onClick={() => handleOrganizations()} variant="outline-secondary" size="lg" className={isOrganizationsActive ? 'active' : ''}>Organizacjom pozarządowym</Button>
                <Button onClick={() => handleLocals()} variant="outline-secondary" size="lg" className={isLocalsActive ? 'active' : ''}>Lokalnym zbiórkom</Button>
            </div>
            {result}
        </section>
    );
};

export default Associations;