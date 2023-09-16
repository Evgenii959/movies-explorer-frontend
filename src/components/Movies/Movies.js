import HeaderMovies from "../Movies/HeaderMovies/HeaderMovies.js";
import SearchForm from "../Movies/SearchForm/SearchForm.js";
import MoviesCardList from "./MoviesCardList/MoviesCardList.js";
import Footer from "../Footer/Footer.js";

function Movies(props) {
    return (
        <>
            <HeaderMovies />
            <SearchForm
                filter={props.filter}
                cards={props.cards}
                handleFilterChange={props.handleFilterChange}
                setFilteredMovies={props.setFilteredMovies}
            />
            <MoviesCardList
                filteredMovies={props.filteredMovies}
                addLikedMovie={props.addLikedMovie}
                isLiked={props.isLiked}
            />
            <Footer />
        </>
    );
}

export default Movies;
