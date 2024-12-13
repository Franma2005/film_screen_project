import { DataMovieRequest } from "../entities/PageInfo";
import { MoviesResponse } from "../Responses/dataMovies";

export const dataMovieRequestMapper = (item : MoviesResponse) : DataMovieRequest => {
    return {
        page: item.page,
        total: item.total_pages,
    };
}
