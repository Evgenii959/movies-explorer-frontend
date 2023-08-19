import HeaderMovies from "../Movies/HeaderMovies/HeaderMovies.js";
import SearchForm from "../Movies/SearchForm/SearchForm.js";
import MoviesCardList from "./MoviesCardList/MoviesCardList.js";
import Footer from "../Footer/Footer.js"

function Main() {
    return (
        <>
            <HeaderMovies />
            <SearchForm />
            <MoviesCardList />
            <Footer />
        </>
    );
}

export default Main;
