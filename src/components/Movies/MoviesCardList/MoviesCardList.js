import Card from "../../App.js";

function MoviesCardList(props) {
    return (
        <>
            <section className="photo">
                {props.cards.map((elem) => (
                    <Card element={elem} key={elem._id} />
                ))}
            </section>
            <div className="photo__addMoviesCard">Еще</div>
        </>
    );
}

export default MoviesCardList;
