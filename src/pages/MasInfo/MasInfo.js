import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import '../MasInfo/style.css'


const MasInfo = (props) => {
    
    const [info, setInfo] = useState([])

    const {id} = useParams()

    const obtenerInfo = async () => {
        const response = await axios.get (`https://api.themoviedb.org/3/movie/${id}?api_key=cbeecd2ae348f85de2e35e5d7928ab42`)
        setInfo (response.data)
    }

    useEffect(() => {
        obtenerInfo()
    }, [])

    return(
        <div className='masinfo'>
            <h1> {info.title}</h1>
            <div className="cardd">
                <img src={`https://image.tmdb.org/t/p/w500/${info.backdrop_path}`} className="imagen" alt={`${info.title}`}/>
                <div className="cardInfo">
                    <p>{info.overview}</p>
                    <p>Estreno : {info.release_date}</p>
                    <p>Calificacion : {info.vote_average} ☆</p>
                    <Link to='/peliculas'><button>volver</button></Link>
                </div>
            </div>
        </div>
    )
}

export default MasInfo