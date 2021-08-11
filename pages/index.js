import { useState } from 'react'
import axios from 'axios'
import moment from 'moment'

import Layout from './../components/layout/Layout';
import Pagination from './../components/other/Pagination';
import Card from './../components/other/Card';


export default function Main({ data }) {

  const [posts, setPosts] = useState([])

  // initial state for pagination
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(6)

  // get current posts
  const indexOfLastPosts = currentPage * postsPerPage
  const indexOfFirstPosts = indexOfLastPosts - postsPerPage
  const paginatedPosts = posts.slice(indexOfFirstPosts, indexOfLastPosts)

  // change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  console.log('data news :', data)

  return (
    <Layout>

      <div className='row gy-3 content-sec'>   {/* Content-Cards ↓↓ */}

        {paginatedPosts.map((post, index) => {
          return (
            <div key={index} className='col-xs-12 col-md-6 col-lg-4'>
              <Card title={post.folanChiz} />
            </div>
          )
        })}

        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate} />

      </div>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  let today = moment().format('yyyy-MM-DD');
  const res = await axios.get(`https://newsapi.org/v2/everything?q=soccer&from=${today}&sortBy=popularity&apiKey=32d8d94782b44cbfb5683dab7817ccf7`)
  const data = res.data

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: { data }
  }
}