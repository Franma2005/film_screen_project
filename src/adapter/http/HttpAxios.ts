import axios from "axios";
import { MoviesResponse, Result } from "../../config/Responses/dataMovies";
import { Http } from "./Http";
import { HttpError } from "./HttpError";
import { DataMovieRequest } from "../../config/entities/PageInfo";


export class HttpAxios extends Http {
    async getFilms({route, page, total}: DataMovieRequest): Promise<MoviesResponse | HttpError> {
        try {
            if(total != null && page != null && (page > total || page < 0)) page = 1;
            const {data} = await axios.get<MoviesResponse>(`${this.url_base}${route}?api_key=${this.key}&page=${page ?? 1}`);
            return data;
        } catch(error) {
            return new HttpError(`${error}`);
        }
    }
}