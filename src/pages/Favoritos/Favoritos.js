import React, { useContext } from 'react'
import CardFavs from '../../components/CardFavs'
import { Context } from '../../store/AppContext'
import "../Favoritos/Favoritos.css"

export const Favoritos = () => {
  const {favs} = useContext(Context)

  return (
    <>
    <div className='container'>
      <h1>Películas Favoritas</h1>
      <div className='d-flex flex-wrap justify-content-center'>
        {
        favs.map(pelicula => (
        <CardFavs key={pelicula.id} {...pelicula} />
          ))
        }
      </div >
    </div>
    </>
  )
}

export default Favoritos