import React from 'react'


function NewsDetail({title, src, desc, author}) {

    return (
        <div className='row gy-3 content-sec color-darki'>

            <div>
                <img className='rounded shadow' height={200} width={280} src={src} alt={title} />
            </div>

            <div className='pt-3'>
                <h3>{title}</h3>
                <p>{desc}</p>
                <span><span className='fw-bold'>author :</span> {author}</span>
            </div>

        </div>
    )
}

export default NewsDetail
