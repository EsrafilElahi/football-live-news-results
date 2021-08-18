import axios from 'axios'
import Layout from '../../components/layout/Layout'
import { MatchCard } from './../../components/other/MatchCard'
import Pagination from './../../components/other/Pagination'
import usePaginationTools from './../../components/pagination tools/usePaginationTools'


function Ligue1({ data }) {

    const posts = data.matches
    const { paginatedPosts, paginate, postsPerPage } = usePaginationTools(posts)

    return (
        <Layout alertTitle='Ligue 1'>
            <div className='row gy-3 content-sec'>

                {
                    posts.length === 0 ? <div className='mt-4 text-danger'>There Is No Match 🤔</div> :
                        paginatedPosts.slice(0).reverse().map((post) => {
                            const Hteam = post.homeTeam.name
                            const Ateam = post.awayTeam.name
                            const Hscore = post.score.fullTime.homeTeam
                            const Ascore = post.score.fullTime.awayTeam

                            return (
                                <div key={post.id} className='col-xs-12 col-lg-6'>
                                    <MatchCard 
                                        id={post.id} 
                                        League={'ligue1'} 
                                        Hteam={Hteam} 
                                        Hscore={Hscore} 
                                        Ateam={Ateam} 
                                        Ascore={Ascore} 
                                    />
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
    const res = await axios.get(`https://api.football-data.org/v2/competitions/FL1/matches?status=FINISHED&matchday`, {
        headers: { 'X-Auth-Token': '24574cf932a34d28b394c721600f5471' }
    })
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

export default Ligue1
