import React, {useEffect, useState} from 'react';
import './Associations.scss';
import Foundations from "./ Foundations/Foundations";
import Organizations from "./Organizations/Organizations";
import Locals from "./Locals/Locals";
import Pagination from "./Pagination/Pagination";
import AssociationsDesktop from "./AssociationsDesktop";
import {db} from '../Firebase/Firebase';
import AssociationsMobile from "./AssociationsMobile";

const Associations = () => {
    const [association, setAssociation] = useState('foundations');
    const [foundations, setFoundations] = useState([]);
    const [organizations, setOrganizations] = useState([]);
    const [locals, setLocals] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);

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

    return (
        <>
            <AssociationsMobile />
            <AssociationsDesktop result={result} setAssociation={setAssociation} setCurrentPage={setCurrentPage} />

        </>
    );
};
export default Associations;