import { useState } from 'react'


const usePaginationTools = (posts) => {

    // initial state for pagination
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(12)

    // get current posts
    const indexOfLastPosts = currentPage * postsPerPage
    const indexOfFirstPosts = indexOfLastPosts - postsPerPage
    const paginatedPosts = posts.slice(indexOfFirstPosts, indexOfLastPosts)

    // change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return { paginatedPosts, paginate, postsPerPage }
}

export default usePaginationTools
