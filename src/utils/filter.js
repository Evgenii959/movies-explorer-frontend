import { useResizeHandler } from "./handleResize";
import { DURATION } from "./constants";

export function Filter(movies, query, short, count) {
    const defaultCount = useResizeHandler();

    if (!movies) {
        return [];
    }

    let filteredMovies = movies;

    if (query) {
        const lowercaseQuery = query.toLowerCase();
        filteredMovies = filteredMovies.filter(
            (movie) =>
                movie.nameRU.toLowerCase().includes(lowercaseQuery) ||
                movie.nameEN.toLowerCase().includes(lowercaseQuery),
        );
    }

    if (short) {
        filteredMovies = filteredMovies.filter(
            (movie) => movie.duration <= DURATION,
        );
    }

    const countMovies = filteredMovies.length;

    filteredMovies = filteredMovies.slice(
        0,
        count ? count : defaultCount.count,
    );

    return { filteredMovies, countMovies };
}
