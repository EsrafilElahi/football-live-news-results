import Link from 'next/link'
import { useContext } from 'react';
import { ThemeContext } from './../context api/ThemeContext';


function StandingCard({ league, src, country }) {

    const { darkMode } = useContext(ThemeContext)

    return (
        <div style={{ height: '279px' }} className="card mx-auto position-relative">
            <img src={src} className="card-img-top" width={100} height={160} alt={league} />
            <div className={darkMode ? "bg-darki color-lighti card-body" : "bg-lighti color-darki card-body"}>
                <p className="card-text">{league}</p>
                <Link href={{ pathname: `/standing/${league}`, query: { league: `${country}` } }}>
                    <a className={darkMode ? 'btn btn-darki' : 'btn btn-lighti'}>continue</a>
                </Link>
            </div>
        </div >
    )
}

export default StandingCard

