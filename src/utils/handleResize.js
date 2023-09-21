import { useEffect, useState } from "react";
import { CARD_ADD, CARD_COUNT } from "./constants";

export function useResizeHandler() {
    // Заменил имя на useResizeHandler для ясности
    const [moviesOnPage, setMoviesOnPage] = useState({
        movies: CARD_COUNT.WIDTH_1280,
        addMovies: CARD_ADD.WIDTH_1280,
    });

    useEffect(() => {
        function handleWindowResize() {
            const screenWidth = window.innerWidth;

            let movies = CARD_COUNT.WIDTH_1280;
            let addMovies = CARD_ADD.WIDTH_1280;

            if (screenWidth < 1200) {
                movies = CARD_COUNT.WIDTH_1200;
                addMovies = CARD_ADD.WIDTH_1200;
            }

            if (screenWidth < 760) {
                movies = CARD_COUNT.WIDTH_760;
                addMovies = CARD_ADD.WIDTH_760;
            }

            setMoviesOnPage({ movies, addMovies });
        }

        let resizeTimeout;

        window.addEventListener("resize", () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(handleWindowResize, 1000);
        });

        return () => {
            window.removeEventListener("resize", handleWindowResize);
            clearTimeout(resizeTimeout);
        };
    }, []);

    return moviesOnPage;
}
