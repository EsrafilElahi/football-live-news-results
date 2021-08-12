import axios from 'axios'
import moment from 'moment'

import Layout from './../components/layout/Layout';
import Pagination from './../components/other/Pagination';
import Card from './../components/other/Card';
import usePaginationTools from './../components/pagination tools/usePaginationTools'


export default function Main({ data }) {

  const posts = data.articles
  const { paginatedPosts, paginate, postsPerPage } = usePaginationTools(posts)
  console.log('data news :', posts)


  return (

    <Layout alertTitle='News'>
      <div className='row gy-3 content-sec'>   {/* Content-Cards ↓↓ */}

        {
          posts.length === 0 ? <div className='mt-4 text-danger'>There Is No News 🤔</div> :
            paginatedPosts.map((post, index) => {
              return (
                <div key={index} className='col-xs-12 col-md-6 col-lg-4'>
                  <Card title={post.title} src={post.urlToImage} />
                </div>
              )
            })
        }
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />

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