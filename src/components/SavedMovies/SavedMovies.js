import HeaderMovies from "../HeaderMovies/HeaderMovies.js";
import Footer from "../Footer/Footer.js";
import { useState } from "react";
import { Filter } from "../../utils/filter";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SavedMoviesCard from "./SavedMoviesCard";

function SavedMovies(props) {
    const [query, setQuery] = useState("");
    const [short, setShort] = useState(false);
    const [search, setSearch] = useState(false);

    const movies = Filter(props.savedMovies, query, short, 0);

    const userMovies = movies.filteredMovies.map((el) => {
        return (
            <SavedMoviesCard
                key={el.movieId}
                id={el.movieId}
                class={el.class}
                movie={el}
                onRemove={props.removeMovie}
            />
        );
    });

    function handleSearch(query) {
        setQuery(query);
        setSearch(true);
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
                isSaved={true}
                moviesCards={userMovies}
                useSearch={search}
            />
            <Footer />
        </>
    );
}

export default SavedMovies;
