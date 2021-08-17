import React from 'react'
import Layout from './../components/layout/Layout';


function NewsDetail() {
    return (
        <Layout>
            news detail
        </Layout>
    )
}


// export const getServerSideProps = async () => {
//     let today = moment().format('yyyy-MM-DD');
//     const res = await axios.get(`https://newsapi.org/v2/everything?q=soccer&from=${today}&sortBy=popularity&apiKey=32d8d94782b44cbfb5683dab7817ccf7`)
//     const data = res.data

//     if (!data) {
//         return {
//             notFound: true
//         }
//     }

//     return {
//         props: { data }
//     }
// }


export default NewsDetail
