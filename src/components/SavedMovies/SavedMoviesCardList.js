import SavedMoviesCard from "./SavedMoviesCard.js";

function SavedMoviesCardList(props) {
    return (
        <>
            <section className="photo">
                {props.likedMovies.map(elem => (
                    <div key={elem.id}>
                        <SavedMoviesCard
                            element={elem}
                            removeCard={props.removeCard}
                        />
                    </div>
                ))}
            </section>
        </>
    );
}

export default SavedMoviesCardList;
