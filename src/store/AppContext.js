import axios from "axios";

import { createContext, useEffect, useState } from "react";

export const Context = createContext(null)
    const UserProvider = ({children}) => {
        
        const getMovies = async() => {
            const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=cbeecd2ae348f85de2e35e5d7928ab42')
            setPeliculas(response.data.results)
        }

        const [peliculas, setPeliculas] = useState([])
        const [favs, setFavs] = useState([])

        const addFavoritos = (movie) => {
            const peliculaFavorita = favs.find(f => f.id===movie.id)
            if(peliculaFavorita){
                alert('la ya esta en tu lista')
                setFavs([...favs])
            }else{
                setFavs([...favs, {...movie}])
                setContador(contador + 1)
            }
        }

        const deleteFavoritos = (id) => {
            setContador(contador - 1)
            return setFavs(favs.filter((fa) => fa.id !== id))
        }

        const [contador, setContador] = useState(0)



        useEffect(() => {
            getMovies()
        }, [])

        return(
            <Context.Provider value={{peliculas, setPeliculas,addFavoritos, favs, setFavs, deleteFavoritos, contador, setContador}} > 
            {children} 
            </Context.Provider>
        )
}

export default UserProvider