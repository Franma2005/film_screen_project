import { useEffect, useState } from "react"
import { FilmAdapter } from "../adapter/FilmAdapter";
import { DataMovieRequest } from "../config/entities/PageInfo";
import { Movie } from "../config/entities/Movie";

export const useMovies = () => {

    const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
    const [dataMoviesRequest, setDataMovieRequest] = useState<DataMovieRequest>({
       route: FilmAdapter.ROUTES.nowPlaying
    });
    const [loading, setLoading] = useState(false);

    const loadMovies = async () => {
        const moviesInfo = await FilmAdapter.getMovies({...dataMoviesRequest});
        if (moviesInfo != null) {
            console.log(moviesInfo.movies);
            let newNowPlaying = [...nowPlaying, ...moviesInfo.movies];
            if (newNowPlaying.length > 30) {
                newNowPlaying = newNowPlaying.slice(-30);
            }
            setNowPlaying(newNowPlaying);
            const newDataMovieRequest = moviesInfo.dataMovieRequest;
            setDataMovieRequest(newDataMovieRequest);
            setLoading(true);
        }
    }

    useEffect(() => {
      loadMovies();
    }, [dataMoviesRequest.page])
    
    return {
        nowPlaying, loading, dataMoviesRequest, setDataMovieRequest
    }
}