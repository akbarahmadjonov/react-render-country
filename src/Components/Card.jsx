const Card = ( {obj} ) => {
    return (
        <li className="col-md-3">
        <div className="card">
            <img className="card-img-top" width='100%' height='150' src={obj?.flags?.svg} alt={obj?.name} />
            <div className="card-body p-3">
                <h4 className="card-title">{obj?.name?.common}</h4>
                    <p className="card-text"><i class="fa-solid fa-arrow-up-right-dots"></i> Population: {<strong>{obj?.population}</strong>}</p>
                    <p className="card-text"><i class="fa-regular fa-flag"></i> Region: {<strong>{obj?.region}</strong>}</p>
                    <p className="card-text"><i class="fa-solid fa-earth-asia"></i> Capital: {<strong>{obj?.capital}</strong>}</p>
            </div>
        </div>
        </li>
    )
}
export default Card;