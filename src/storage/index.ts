import AsyncStorage from "@react-native-async-storage/async-storage";
import { MovieProps } from "../screens/Movies";

// criar uma função para salvar um filme em um array

export type StorageMoviesProps = {
    [id: string]: {
        data: MovieProps
    }
}

export async function saveFavoriteMovie(movie: MovieProps): Promise<void> {
    const data = await AsyncStorage.getItem('@movies');
    const oldMovies = data ? (JSON.parse(data) as StorageMoviesProps) : {};

    const newMovie = {
        [movie.imdbID]: {
            data: movie
        }
    }
    await AsyncStorage.setItem('@movies', JSON.stringify({...newMovie, ...oldMovies}));
}

export async function loadFavoritesMovies(): Promise<MovieProps[]> {
    try {
        const data = await AsyncStorage.getItem('@movies');
        const movies = data ? (JSON.parse(data) as StorageMoviesProps) : {};

        const favoritesMovies: MovieProps[] = Object
            .keys(movies)
            .map((movie) => {
                return {
                    ...movies[movie].data
                }
            })

        return favoritesMovies;
    } catch (error) {
        throw new Error(error);
    }
}

export async function removeFavoriteMovie(id: string): Promise<void> {
    const data = await AsyncStorage.getItem('@movies');
    const movies = data ? (JSON.parse(data) as StorageMoviesProps) : {};

    delete movies[id];
    await AsyncStorage.setItem(
        '@movies',
        JSON.stringify(movies)
    );
}