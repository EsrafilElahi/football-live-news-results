import Link from 'next/link'


function MrGoalCard({ league, src, country }) {
    return (
        <div style={{ height: '279px' }} className="card mx-auto position-relative">
            <img src={src} className="card-img-top" width={100} height={160} alt={league} />
            <div className="card-body">
                <p className="card-text">{league}</p>
                <Link href={{ pathname: `/mrGoal/${league}`, query: { league: `${country}` } }}
                ><a className="btn btn-primary card-custom-body">continue</a></Link>
            </div>
        </div >
    )
}

export default MrGoalCard