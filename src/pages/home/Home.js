import React, { useContext } from 'react'
import { useEffect, useState } from "react";
import { Context } from '../../store/AppContext';
import CardPelicula from '../../components/CardPelicula';

const Home = () => {
    const { peliculas } = useContext(Context)
    console.log(peliculas)

  return (
    <>
        <div className='container'>
            {
            peliculas.map(pelicula => (
                <CardPelicula key={pelicula.id} {...pelicula} />
            ))
            }
        </div>
    </>
  )
}

export default Home