import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../store/AppContext'

const CardFav = (props) => {
    const {deleteFavoritos} = useContext(Context)
    const {id, backdrop_path, title, vote_average} = props;

    return (
        <div>
            <div className="card mb-3" style={{width: "14rem"}}>
            <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} className="card-img-top" alt="Poster" />
            <div className="card-body">
                <h5 className="card-title" style={{fontSize: "large"}}>{title}</h5>
                <a href="#"  onClick={()=> deleteFavoritos(id)}><i className="cora bi bi-suit-heart-fill"></i></a> <a style={{fontSize: "small"}}>Calificación: {vote_average}</a>
                <Link className='info' to={`/${id}`}> + info  </Link>
            </div>
            </div>
        </div>
    )
}

export default CardFav