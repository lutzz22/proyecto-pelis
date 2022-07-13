import axios from "axios";

import { createContext, useEffect, useState } from "react";

export const Context = createContext(null)
    const UserProvider = ({children}) => {
        
        const getMovies = async() => {
            const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=cbeecd2ae348f85de2e35e5d7928ab42')
            setPeliculas(response.data.results)
        }

        const [peliculas, setPeliculas] = useState([])

        useEffect(() => {
            getMovies()
        }, [])
        return(
            <Context.Provider value={{peliculas, setPeliculas}} > 
            {children} 
            </Context.Provider>
        )
}

export default UserProvider