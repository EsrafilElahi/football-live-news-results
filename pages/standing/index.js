import Layout from '../../components/layout/Layout'
import StandingCard from './../../components/other/StandingCard'


function Standing() {

    return (
        <Layout alertTitle='Which League Standing ?'>
            <div className='row gx-1 gy-3 content-sec'>

                <StandingCard country='england' league='Premier-League' src='/images/premier-league.png' />
                <StandingCard country='spain' league='Laliga' src='/images/laliga.jpg' />
                <StandingCard country='italy' league='Serie-A' src='/images/seriea.png' />
                <StandingCard country='germany' league='Bundesliga' src='/images/bundesliga.jpg' />
                <StandingCard country='france' league='Ligue-1' src='/images/ligue1.jpg' />
                <StandingCard country='UEFA Champions League' league='UCL' src='/images/ucl.jpg' />

            </div>
        </Layout>
    )
}

export default Standing
