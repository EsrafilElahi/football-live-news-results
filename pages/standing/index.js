import axios from 'axios'
import Layout from '../../components/layout/Layout';


function Standing({ dataPL, dataPD, dataSA, dataBL1, dataFL1 }) {
    console.log('data Standing PL :', dataPL)
    console.log('data Standing PD :', dataPD)
    console.log('data Standing SA :', dataSA)
    console.log('data Standing BL1 :', dataBL1)
    console.log('data Standing FL1 :', dataFL1)

    return (
        <Layout>
            Standing
        </Layout>
    )
}


export const getServerSideProps = async () => {
    const standingResPL = await axios.get(`https://api.football-data.org/v2/competitions/PL/standings`, {
        headers: { 'X-Auth-Token': '24574cf932a34d28b394c721600f5471' }
    })
    const standingResPD = await axios.get(`https://api.football-data.org/v2/competitions/PD/standings`, {
        headers: { 'X-Auth-Token': '24574cf932a34d28b394c721600f5471' }
    })
    const standingResSA = await axios.get(`https://api.football-data.org/v2/competitions/SA/standings`, {
        headers: { 'X-Auth-Token': '24574cf932a34d28b394c721600f5471' }
    })
    const standingResBL1 = await axios.get(`https://api.football-data.org/v2/competitions/BL1/standings`, {
        headers: { 'X-Auth-Token': '24574cf932a34d28b394c721600f5471' }
    })
    const standingResFL1 = await axios.get(`https://api.football-data.org/v2/competitions/FL1/standings`, {
        headers: { 'X-Auth-Token': '24574cf932a34d28b394c721600f5471' }
    })

    const dataPL = standingResPL.data
    const dataPD = standingResPD.data
    const dataSA = standingResSA.data
    const dataBL1 = standingResBL1.data
    const dataFL1 = standingResFL1.data

    if (!dataPL, !dataPD, !dataSA, !dataBL1, !dataFL1) {
        return {
            notFound: true
        }
    }
    return {
        props: { dataPL, dataPD, dataSA, dataBL1, dataFL1 }
    }
}

export default Standing
