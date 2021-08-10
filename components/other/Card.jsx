
function Card({title}) {
    return (
        <div>
            <div className="card mx-auto position-relative">
                <img src="https://via.placeholder.com/150" className="card-img-top" alt="image" />
                <div className="card-body">
                    <p className="card-text">{title}</p>
                    <a href="#" className="btn btn-primary">continue</a>
                </div>
            </div>
        </div>
    )
}

export default Card
