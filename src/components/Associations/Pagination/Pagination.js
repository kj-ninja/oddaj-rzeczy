import React from 'react';
import Button from "react-bootstrap/Button";

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    if (totalPosts <= 3) {
        return null;
    }
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className="pagination d-flex justify-content-center">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <Button onClick={() => paginate(number)} variant="outline-secondary">{number}</Button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
export default Pagination;