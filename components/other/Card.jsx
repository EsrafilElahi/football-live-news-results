import Link from 'next/link'
import { useContext } from 'react'
import { ThemeContext } from './../context api/ThemeContext';


function Card({ title, src }) {
    let cuttedTitle = title.split(' ').slice(0, 5).join(' ')
    const { darkMode } = useContext(ThemeContext)

    return (
        <div>
            <div style={{ height: '279px' }} className="card mx-auto position-relative">
                <img loading='lazy' src={src} className="card-img-top" height={130} alt={title} />
                <div className={darkMode ? 'bg-darki color-lighti card-body' : 'bg-lighti color-darki card-body'}>
                    <p className="card-text">{cuttedTitle}</p>
                    <Link href={`/${title}`}><a className={darkMode ? 'btn btn-darki' : 'btn btn-lighti'}>continue</a></Link>
                </div>
            </div>
        </div>
    )
}

export default Card

