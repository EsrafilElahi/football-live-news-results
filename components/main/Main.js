import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import moment from 'moment'
import { css } from "@emotion/react";
import { CircleLoader } from "react-spinners";

import Layout from '../layout/Layout';
import Title from '../other/Title';
import Pagination from '../other/Pagination';
import Card from '../other/Card';


const loadingStyle = css`
  margin: 0 auto;
  margin-top: 10rem;
`;

export default function Main({ data }) {

    const [posts, setPosts] = useState([])
    const loading = useSelector(state => state.loading)
    const dispatch = useDispatch()


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


    // -- today matches --
    // https://api.football-data.org/v2/matches?competitions=PL,PD,SA,BL1,FL1,CL&dateFrom=${today}&dateTo=${tomorrow}
    // -- news --
    // https://newsapi.org/v2/everything?q=soccer&from=${today}&sortBy=popularity&apiKey=32d8d94782b44cbfb5683dab7817ccf7


    let today = moment().format('yyyy-MM-DD');
    let tomorrow = moment(moment(today).add(1, 'd').format('YYYY-MM-DD'))._i


    // useEffect(() => {
    //     const fetchData = async () => {
    //         dispatch(setLoading(true))
    //         const res = await axios.get(`https://api.football-data.org/v2/matches?competitions=PL,PD,SA,BL1,FL1,CL&dateFrom=${today}&dateTo=${tomorrow}`, {
    //             headers: { 'X-Auth-Token': '24574cf932a34d28b394c721600f5471' }
    //         })
    //         setPosts(res.data.matches)
    //         dispatch(setLoading(false))
    //     }


    //     fetchData()

    // }, [])

    // console.log('data :', data)


    return (
        <Layout>
            <div className='row'>
                <div className='col-12 title pt-2'>   {/* Title */}
                    <Title title='feelani' />
                </div>
            </div>

            <div className='row gy-3 content-sec'>   {/* Content-Cards ↓↓ */}

                <CircleLoader color={'#1e77ff'} loading={loading} css={loadingStyle} size={100} />                {paginatedPosts.map((post, index) => {
                    return (
                        <div key={index} className='col-xs-12 col-md-6 col-lg-4'>
                            <Card title={post.id} />
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
    const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=24h")
  
    const data = await res.json()
  
    if (!data) {
      return {
        notFound: true
      }
    }
  
    return {
      props: { data }
    }
  }