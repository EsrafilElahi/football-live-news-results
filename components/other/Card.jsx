import Link from 'next/link'

function Card({ title, src }) {
    let cuttedTitle = title.split(' ').slice(0, 5).join(' ')

    return (
        <div>
            <div style={{ height: '279px' }} className="card mx-auto position-relative">
                <img loading='lazy' src={src} className="card-img-top" height={130} alt={title} />
                <div className="card-body">
                    <p className="card-text">{cuttedTitle}</p>
                    <Link href={`/${title}`}><a className="btn btn-primary card-custom-body">continue</a></Link>
                </div>
            </div>
        </div>
    )
}

export default Card

