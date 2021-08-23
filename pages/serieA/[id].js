import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Layout from './../../components/layout/Layout'
import MatchDetailCard from './../../components/other/MatchDetail'


function MatchDetail({ data }) {

    const posts = data.matches
    const router = useRouter()
    const { id } = router.query

    return (
        <Layout alertTitle='Match Detail'>
            {
                posts.map((post) => {
                    return (
                        <div key={post.id}>
                            <div>{post.id == id ? (
                                <MatchDetailCard
                                    Status={post.status}
                                    Winner={post.score.winner}
                                    MatchDay={post.matchday}
                                    Country='Italy'
                                    Hteam={post.homeTeam.name}
                                    Hscore={post.score.fullTime.homeTeam}
                                    Ateam={post.awayTeam.name}
                                    Ascore={post.score.fullTime.awayTeam}
                                />
                            ) : null}</div>
                        </div>
                    )
                })
            }
        </Layout>
    )
}

export const getServerSideProps = async () => {
    const res = await axios.get(`https://api.football-data.org/v2/competitions/SA/matches?status=FINISHED`, {
        headers: { 'X-Auth-Token': '24574cf932a34d28b394c721600f5471' }
    })

    const data = res.data

    return {
        props: { data }
    }
}

export default MatchDetail
