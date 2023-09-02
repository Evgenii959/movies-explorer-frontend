import MoviesCard from "../MoviesCard/MoviesCard.js";

function MoviesCardList(props) {
    console.log(props)
    return (
        <>
            <section className="photo">
                {props.cards.map(elem => (
                    <MoviesCard
                        element={elem}
                        key={elem._id}
                    />
                ))}
            </section>
            <div className="photo__addMoviesCard">Еще</div>
        </>
    );
}

export default MoviesCardList;
