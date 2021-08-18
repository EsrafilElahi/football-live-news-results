import { useContext } from 'react'
import axios from 'axios'
import Layout from './../../../components/layout/Layout'
import { ThemeContext } from './../../../components/context api/ThemeContext'


function PremierLeague({ dataPL }) {

    const { darkMode } = useContext(ThemeContext)
    const posts = dataPL.scorers

    return (

        <Layout alertTitle='Ligue-1 Scorers'>
            <div className='row gy-3 content-sec'>

                {posts.length === 0 ? <div className='mt-4 text-danger'>There Is No Scorers 🤔</div> :
                    <table className={darkMode ? "standing-darki table table-hover" : "standing-lighti table table-hover"}>
                        <thead>
                            <tr>
                                <th scope="col">position</th>
                                <th scope="col">name</th>
                                <th scope="col">team</th>
                                <th scope="col">goals</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                posts.map((post, index) => {
                                    let position = index + 1
                                    return (
                                        <tr key={index}>
                                            <th scope="row">{position}</th>
                                            <td>{post.player.name}</td>
                                            <td>{post.team.name}</td>
                                            <td>{post.numberOfGoals}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                }

            </div>
        </Layout>
    )
}

export const getServerSideProps = async () => {
    const scorersResPL = await axios.get(`https://api.football-data.org/v2/competitions/PL/scorers`, {
        headers: { 'X-Auth-Token': '24574cf932a34d28b394c721600f5471' }
    })

    const dataPL = scorersResPL.data

    if (!dataPL) {
        return {
            notFound: true
        }
    }
    return {
        props: { dataPL }
    }
}

export default PremierLeague
