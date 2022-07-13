import React, { useContext } from 'react'
import { useEffect, useState } from "react";
import { Context } from '../../store/AppContext';
import CardPelicula from '../../components/CardPelicula';
import "../Peliculas/Peliculas.css"

const Peliculas = () => {
    const { peliculas } = useContext(Context)

  return (
    <>
        <div className='container'>
        <h1>Películas Populares</h1>
        <div className='d-flex flex-wrap justify-content-between'>
            {
            peliculas.map(pelicula => (
                <CardPelicula key={pelicula.id} {...pelicula} />
            ))
            }
        </div>    
       </div>
    </>
  )
}

export default Peliculas
