import { Movie } from "../config/entities/Movie";
import { DataMovieRequest } from "../config/entities/PageInfo";
import { dataMovieRequestMapper } from "../config/mapper/dataMovieRequestMapper";
import { movieMapper } from "../config/mapper/movieMapper";
import { Result } from "../config/Responses/dataMovies";
import { HttpError } from "./http/HttpError";
import { HttpFactory2 } from "./http/HttpFactory2";

interface MoviesInfo {
    movies: Movie[];
    dataMovieRequest: DataMovieRequest;
}

export class FilmAdapter {

    static ROUTES = {
        nowPlaying: "/now_playing"
    }

    static async getMovies(dataMovieRequest: DataMovieRequest): Promise<MoviesInfo | null> {
        const http = HttpFactory2.build();

        const dataMovies = await http.getFilms(dataMovieRequest);

        if (dataMovies instanceof HttpError) return null;
        const movies = dataMovies.results.map((item: Result) => movieMapper(item));
        console.log(movies);
        dataMovieRequest = {...dataMovieRequestMapper(dataMovies), route: dataMovieRequest.route};
        
        return {movies, dataMovieRequest};
    }
}