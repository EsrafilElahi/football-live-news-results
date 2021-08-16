import Layout from '../../components/layout/Layout'
import MrGoalCard from './../../components/other/MrGoalCard';


function MrGoal() {

    return (
        <Layout alertTitle='Which League ?'>
            <div className='row gx-1 gy-3 content-sec'>

                <MrGoalCard country='england' league='Premier-League' src='/images/premier-league.png' />
                <MrGoalCard country='spain' league='Laliga' src='/images/laliga.jpg' />
                <MrGoalCard country='italy' league='Serie-A' src='/images/seriea.png' />
                <MrGoalCard country='germany' league='Bundesliga' src='/images/bundesliga.jpg' />
                <MrGoalCard country='france' league='Ligue-1' src='/images/ligue1.jpg' />
                <MrGoalCard country='UEFA Champions League' league='UCL' src='/images/ucl.jpg' />

            </div>
        </Layout>
    )
}

export default MrGoal
