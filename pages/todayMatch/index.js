import axios from 'axios'
import moment from 'moment'
import Layout from '../../components/layout/Layout'
import { TodayMatchCard } from './../../components/other/MatchCard'
import Pagination from './../../components/other/Pagination'
import usePaginationTools from './../../components/pagination tools/usePaginationTools'


function TodayMatch({ data }) {

    const posts = data.matches
    const { paginatedPosts, paginate, postsPerPage } = usePaginationTools(posts)
    console.log('data TodayMatch :', data)

    return (
        <Layout alertTitle='Today Matches'>
            <div className={paginatedPosts.length > 12 ? 'row gy-3 content-sec' : 'row gy-3'}>

                {
                    posts.length === 0 ? <div className='mt-4 text-danger'>There Is No Match 🤔</div> :
                        paginatedPosts.map((post) => {
                            const Hteam = post.homeTeam.name
                            const Ateam = post.awayTeam.name
                            const LeagueName = post.competition.name

                            return (
                                <div key={post.id} className='col-xs-12 col-lg-6'>
                                    <TodayMatchCard LeagueName={LeagueName} Hteam={Hteam} Ateam={Ateam} />
                                </div>
                            )
                        })
                }

                {
                    paginatedPosts.length > 12 ?
                        <Pagination
                            postsPerPage={postsPerPage}
                            totalPosts={posts.length}
                            paginate={paginate}
                        /> : null
                }

            </div>
        </Layout>
    )
}


export const getServerSideProps = async () => {
    let today = moment().format('yyyy-MM-DD');
    let tomorrow = moment(moment(today).add(1, 'd').format('YYYY-MM-DD'))._i

    const res = await axios.get(`https://api.football-data.org/v2/matches?competitions=PL,PD,SA,BL1,FL1,CL&dateFrom=${today}&dateTo=${tomorrow}`, {
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

export default TodayMatch
