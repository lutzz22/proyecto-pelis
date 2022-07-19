import React, { useContext } from 'react'
import CardFavs from '../../components/CardFavs'
import { Context } from '../../store/AppContext'
import "../Favoritos/Favoritos.css"

export const Favoritos = () => {
  const {favs} = useContext(Context)

  return (
    <>
    <div className='container'>
      <div className='d-flex flex-wrap justify-content-between'>
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