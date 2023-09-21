function MoviesCardList(props) {
    return (
        <>
            {props.moviesCards.length > 0 || !props.useSearch ? (
                <section className="photo">{props.moviesCards}</section>
            ) : (
                <p className={"photo__message"}>Ничего не найдено</p>
            )}

            <div
                className={
                    props.moviesCards.length < props.movies &&
                    !props.isSaved &&
                    props.moviesCards.length > 0
                        ? "photo__addMoviesCard"
                        : "photo__addMoviesCard_hidden"
                }
                type={"button"}
                onClick={() => props.addMovies()}
            >
                Еще
            </div>
        </>
    );
}

export default MoviesCardList;
