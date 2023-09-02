import HeaderMovies from "../Movies/HeaderMovies/HeaderMovies.js";
import SearchForm from "../Movies/SearchForm/SearchForm.js";
import MoviesCardList from "./MoviesCardList/MoviesCardList.js";
import Footer from "../Footer/Footer.js";

function Movies(props) {
    return (
        <>
            <HeaderMovies />
            <main>
                <SearchForm />
                <MoviesCardList
                    cards={props.cards}
                />
            </main>
            <Footer />
        </>
    );
}

export default Movies;
