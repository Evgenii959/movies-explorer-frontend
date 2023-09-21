import HeaderMovies from "../HeaderMovies/HeaderMovies.js";
import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import Footer from "../Footer/Footer.js";
import { useEffect, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useResizeHandler } from "../../utils/handleResize";
import { Filter } from "../../utils/filter";

function Movies(props) {
    const moviesOnPage = useResizeHandler();
    const [query, setQuery] = useState(
        localStorage.getItem("queryMovies") || "",
    );
    const [short, setShort] = useState(() => {
        const savedShort = localStorage.getItem("shortMovies");
        return savedShort ? JSON.parse(savedShort) : false;
    });

    const [count, setCount] = useState(0);
    const [search, setSearch] = useState(false);

    useEffect(() => {
        if (query !== "") {
            setSearch(true);
        }
    }, []);

    useEffect(() => {
        setCount(moviesOnPage.movies);
    }, [moviesOnPage]);

    useEffect(() => {
        localStorage.setItem("queryMovies", query);
    }, [query]);

    useEffect(() => {
        localStorage.setItem("shortMovies", JSON.stringify(short));
    }, [short]);

    const filterMovies = Filter(props.movies, query, short, count);

    const moviesCards = filterMovies.filteredMovies.map((el) => {
        return (
            <MoviesCard
                key={el.id}
                id={el.id}
                class={el.class}
                movie={el}
                onRemove={props.removeMovie}
                onLike={props.addLikedMovie}
            />
        );
    });

    function handleSearch(query) {
        setQuery(query);
        if (props.movies.length === 0) {
            props.getBitFilmsMovies(setSearch);
        } else {
            setSearch(true);
        }
        setCount(moviesOnPage.movies);
    }

    function moreMovies() {
        setCount(count + moviesOnPage.addMovies);
    }

    function toggleShort(checked) {
        setShort(checked);
    }

    return (
        <>
            <HeaderMovies />
            <SearchForm
                onSearch={handleSearch}
                onToggle={toggleShort}
                checked={short}
            />
            <MoviesCardList
                moviesCards={moviesCards}
                addMovies={moreMovies}
                maxMovies={count}
                isSaved={false}
                movies={filterMovies.countMovies}
                useSearch={search}
            />
            <Footer />
        </>
    );
}

export default Movies;
