import React, { useContext } from 'react'
import { Context } from '../../store/AppContext';
import CardPelicula from '../../components/CardPelicula';
import "../home/style.css"

const Home = () => {
    const { peliculas } = useContext(Context)

  return (
    <>
      <div>
      <div className='container'>
        <h1>Películas Populares</h1>
        <div className='d-flex flex-wrap justify-content-between'>
            {
            peliculas.map(pelicula => (
                <CardPelicula key={pelicula.id} {...pelicula} movie={pelicula} />
            ))
            }
        </div>    
       </div>
      </div>
    </>
  )
}

export default Home