function SavedMoviesCard(props) {
    function time(duration) {
        const number = parseInt(duration);
        const hours = Math.floor(number / 60);
        const minutes = number % 60;
        return `${hours}ч ${minutes}м`;
    }

    function remove() {
        props.onRemove(props.id);
    }

    return (
        <div className="photo__container">
            <a href={props.movie.trailerLink} target="blank">
                <img
                    className="photo__item"
                    src={props.movie.image}
                    alt={props.movie.description}
                />
            </a>
            <div className="photo__title-toggle">
                <h2 className="photo__title">{props.movie.nameRU}</h2>
                <div className="photo__toggle photo__toggle_delete">
                    <button
                        className="photo__delete"
                        type="button"
                        onClick={remove}
                    />
                </div>
            </div>
            <p className="photo__duration">{time(props.movie.duration)}</p>
        </div>
    );
}

export default SavedMoviesCard;
