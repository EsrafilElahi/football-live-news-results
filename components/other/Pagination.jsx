import React from 'react'


function Pagination({ postsPerPage, totalPosts, paginate }) {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }


    return (
        <div className='d-flex justify-content-center'>
            <nav>
                <ul className='pagination mx-auto'>
                    {pageNumbers.map(number => (
                        <li key={number} className='page-item'>
                            <a onClick={() => paginate(number)} href='#' className='page-link'>
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Pagination
