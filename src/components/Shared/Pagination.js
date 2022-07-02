import React from 'react';

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <>

            {
                pageNumbers.map(number => {
                    return <button onClick={() => paginate(number)} class="btn">{number}</button>

                })
            }

        </>
    );
};

export default Pagination;