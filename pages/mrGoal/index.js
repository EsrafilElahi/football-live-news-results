import axios from 'axios'
import Layout from '../../components/layout/Layout';


function MrGoal({ dataPL, dataPD, dataSA, dataBL1, dataFL1, dataCL }) {
    console.log('data scorers PL :', dataPL)
    console.log('data scorers PD :', dataPD)
    console.log('data scorers SA :', dataSA)
    console.log('data scorers BL1 :', dataBL1)
    console.log('data scorers FL1 :', dataFL1)
    console.log('data scorers CL :', dataCL)

    return (
        <Layout alertTitle='Mr Goal'>
            MrGoal
        </Layout>
    )
}


export const getServerSideProps = async () => {
    const scorersResPL = await axios.get(`https://api.football-data.org/v2/competitions/PL/scorers`, {
        headers: { 'X-Auth-Token': '24574cf932a34d28b394c721600f5471' }
    })
    const scorersResPD = await axios.get(`https://api.football-data.org/v2/competitions/PD/scorers`, {
        headers: { 'X-Auth-Token': '24574cf932a34d28b394c721600f5471' }
    })
    const scorersResSA = await axios.get(`https://api.football-data.org/v2/competitions/SA/scorers`, {
        headers: { 'X-Auth-Token': '24574cf932a34d28b394c721600f5471' }
    })
    const scorersResBL1 = await axios.get(`https://api.football-data.org/v2/competitions/BL1/scorers`, {
        headers: { 'X-Auth-Token': '24574cf932a34d28b394c721600f5471' }
    })
    const scorersResFL1 = await axios.get(`https://api.football-data.org/v2/competitions/FL1/scorers`, {
        headers: { 'X-Auth-Token': '24574cf932a34d28b394c721600f5471' }
    })
    const scorersResCL = await axios.get(`https://api.football-data.org/v2/competitions/CL/scorers`, {
        headers: { 'X-Auth-Token': '24574cf932a34d28b394c721600f5471' }
    })

    const dataPL = scorersResPL.data
    const dataPD = scorersResPD.data
    const dataSA = scorersResSA.data
    const dataBL1 = scorersResBL1.data
    const dataFL1 = scorersResFL1.data
    const dataCL = scorersResCL.data

    if (!dataPL, !dataPD, !dataSA, !dataBL1, !dataFL1, !dataCL) {
        return {
            notFound: true
        }
    }
    return {
        props: { dataPL, dataPD, dataSA, dataBL1, dataFL1, dataCL }
    }
}

export default MrGoal
