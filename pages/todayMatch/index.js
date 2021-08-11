import axios from 'axios'
import moment from 'moment'
import Layout from '../../components/layout/Layout';


function TodayMatch({ data }) {
    console.log('data TodayMatch :', data)

    return (
        <Layout>
            TodayMatch
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
