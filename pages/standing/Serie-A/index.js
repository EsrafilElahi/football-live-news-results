import axios from 'axios'
import Layout from './../../../components/layout/Layout'
import Pagination from './../../../components/other/Pagination';
import usePaginationTools from './../../../components/pagination tools/usePaginationTools';


function SerieA({ dataSA }) {

    const posts = dataSA.standings[0].table
    const { paginatedPosts, paginate, postsPerPage } = usePaginationTools(posts)
    console.log('data pd :', posts)

    return (

        <Layout alertTitle='Serie-A Standing'>
            <div className='row gy-3 content-sec'>

                {posts.length === 0 ? <div className='mt-4 text-danger'>There Is No Standing 🤔</div> :
                    <table className="table table-hover table-striped">
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
    const standingResSA = await axios.get(`https://api.football-data.org/v2/competitions/SA/standings`, {
        headers: { 'X-Auth-Token': '24574cf932a34d28b394c721600f5471' }
    })

    const dataSA = standingResSA.data

    if (!dataSA) {
        return {
            notFound: true
        }
    }
    return {
        props: { dataSA }
    }
}


export default SerieA
