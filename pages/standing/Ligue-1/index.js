import { useContext } from 'react'
import axios from 'axios'
import Layout from './../../../components/layout/Layout'
import Pagination from './../../../components/other/Pagination'
import usePaginationTools from './../../../components/pagination tools/usePaginationTools'
import { ThemeContext } from './../../../components/context api/ThemeContext'


function Ligue1({ dataFL1 }) {

    const { darkMode } = useContext(ThemeContext)
    const posts = dataFL1.standings[0].table
    const { paginatedPosts, paginate, postsPerPage } = usePaginationTools(posts)

    return (

        <Layout alertTitle='Ligue 1 Standing'>
            <div className='row gy-3 content-sec'>

                {posts.length === 0 ? <div className='mt-4 text-danger'>There Is No Standing 🤔</div> :
                    <table className={darkMode ? "standing-darki table table-hover" : "standing-lighti table table-hover"}>
                        <thead>
                            <tr>
                                <th scope="col">position</th>
                                <th scope="col">team</th>
                                <th scope="col">games</th>
                                <th scope="col">win</th>
                                <th scope="col">draw</th>
                                <th scope="col">lost</th>
                                <th scope="col">point</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                paginatedPosts.map((post, index) => {
                                    let name = post.team.name
                                    let cuttedName = name.split(' ').slice(0, 2).join(' ')
                                    return (
                                        <tr key={index}>
                                            <th scope="row">{post.position}</th>
                                            <td>{cuttedName}</td>
                                            <td>{post.playedGames}</td>
                                            <td>{post.won}</td>
                                            <td>{post.draw}</td>
                                            <td>{post.lost}</td>
                                            <td>{post.points}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
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
    const standingResFL1 = await axios.get(`https://api.football-data.org/v2/competitions/FL1/standings`, {
        headers: { 'X-Auth-Token': '24574cf932a34d28b394c721600f5471' }
    })

    const dataFL1 = standingResFL1.data

    if (!dataFL1) {
        return {
            notFound: true
        }
    }
    return {
        props: { dataFL1 }
    }
}


export default Ligue1
