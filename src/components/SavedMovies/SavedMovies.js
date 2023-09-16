import HeaderMovies from "../Movies/HeaderMovies/HeaderMovies.js";
import SavedMoviesCardList from "./SavedMoviesCardList.js";
import SavedSearchForm from "../SavedMovies/SavedSearchForm.js";
import Footer from "../Footer/Footer.js";

function SavedMovies(props) {
    return (
        <>
            <HeaderMovies />
            <SavedSearchForm
                saveMovies={props.saveMovies}
                filter={props.filter}
                handleFilterChange={props.handleFilterChange}
                setFilteredMovies={props.setFilteredMovies}
            />
            <SavedMoviesCardList
                likedMovies={props.likedMovies}
                removeCard={props.removeCard}
            />
            <Footer />
        </>
    );
}

export default SavedMovies;
