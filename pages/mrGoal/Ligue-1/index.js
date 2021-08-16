import axios from 'axios'
import Layout from './../../../components/layout/Layout'


function Ligue1({ dataFL1 }) {

    const posts = dataFL1.scorers
    console.log('data pd :', dataFL1)

    return (

        <Layout alertTitle='Ligue-1 Scorers'>
            <div className='row gy-3 content-sec'>

                {posts.length === 0 ? <div className='mt-4 text-danger'>There Is No Scorers 🤔</div> :
                    <table className="table table-hover table-striped">
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
    const scorersResFL1 = await axios.get(`https://api.football-data.org/v2/competitions/FL1/scorers`, {
        headers: { 'X-Auth-Token': '24574cf932a34d28b394c721600f5471' }
    })

    const dataFL1 = scorersResFL1.data

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
