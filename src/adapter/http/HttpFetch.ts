import { DataMovieRequest } from "../../config/entities/PageInfo";
import { MoviesResponse } from "../../config/Responses/dataMovies";
import { FilmAdapter } from "../FilmAdapter";
import { Http } from "./Http";
import { HttpError } from "./HttpError";

export class HttpFetch extends Http {
    async getFilms({route, page, total}: DataMovieRequest): Promise<MoviesResponse | HttpError> {
        try {
            if(total != null && page != null && (page > total || page < 0)) page = 1;
            const data = await fetch(`${this.url_base}${route}?api_key=${this.key}&page=${page ?? 1}`);
            const jsonData: MoviesResponse = await data.json();
            return jsonData;
        } catch(error) {
            return new HttpError(`${error}`);
        }
    }
}