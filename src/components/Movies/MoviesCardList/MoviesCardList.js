import MoviesCard from "../MoviesCard/MoviesCard.js";

function MoviesCardList(props) {
    return (
        <>
            <section className="photo">
                {props.filteredMovies.map(elem => (
                    <div key={elem.id}>
                        <MoviesCard
                            element={elem}
                            addLikedMovie={props.addLikedMovie}
                        />
                    </div>
                ))}
            </section>
            <div className="photo__addMoviesCard">Еще</div>
        </>
    );
}

export default MoviesCardList;
