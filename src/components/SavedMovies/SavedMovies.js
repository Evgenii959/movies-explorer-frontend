import HeaderMovies from "../Movies/HeaderMovies/HeaderMovies.js";
import MoviesCardList from "./MoviesCardList.js";
import MoviesCard from "./MoviesCard.js";
import SearchForm from "../Movies/SearchForm/SearchForm.js"
import Footer from "../Footer/Footer.js";

function Main() {
    return (
        <>
            <HeaderMovies />
            <main>
                <SearchForm />
                <MoviesCardList>
                    <MoviesCard />
                </MoviesCardList>
            </main>
            <Footer />
        </>
    );
}

export default Main;
