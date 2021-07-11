import React, {
    createContext,
    useContext,
    useState,
    ReactNode
} from "react";
import { MovieProps } from '../screens/Movies';
import api from "../services/api";
import { loadFavoritesMovies } from '../storage';
type MoviesContextData = {
    movies: MovieProps[],
    getMovies: (title: string) => Promise<void>
}

type MoviesProviderProps = {
    children: ReactNode;
}

export const MoviesContext = createContext({} as MoviesContextData)

function MoviesProvider({children}: MoviesProviderProps) {
    const [ movies, setMovies ] = useState<MovieProps[]>([]);
    //const [ star, setStar ] = useState<string[]>([]);
    async function getMovies(title: string){
        const moviesByTitle = await api.get('', {
          params: {
            s: title
          }
        });
        //const response = moviesByTitle.config.data;
        console.log(JSON.stringify(moviesByTitle.data.Search));

        const moviesStorage = await loadFavoritesMovies();

        let moviesFinded = moviesByTitle.data.Search;
        if(moviesFinded){
            moviesFinded.map((obj: any) => {
                for(let index in moviesStorage){
                    if(moviesStorage[index].imdbID === obj.imdbID){
                        return obj.isChecked = true;
                    }
                }
                return obj.isChecked = false;
            })
        }
        !moviesFinded ? setMovies([]) : setMovies(moviesFinded)
    }

    return(
        <MoviesContext.Provider value={{movies, getMovies}}>
            { children }
        </MoviesContext.Provider>
    )
}

function useMovies() {
    const context = useContext(MoviesContext);
    return context;
}

export {
    MoviesProvider,
    useMovies
}