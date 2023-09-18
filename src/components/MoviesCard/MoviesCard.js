function MoviesCard(props) {
    const cardLikeButtonClassName = `photo__heart ${
        props.class === "like" && "photo__heart_active"
    }`;

    function time(duration) {
        const number = parseInt(duration);
        const hours = Math.floor(number / 60);
        const minutes = number % 60;
        return `${hours}ч ${minutes}м`;
    }

    function like() {
        props.onLike(props.movie);
    }

    function remove() {
        props.onRemove(props.id);
    }

    return (
        <div className="photo__container">
            <a href={props.movie.trailerLink} target="blank">
                <img
                    className="photo__item"
                    src={`https://api.nomoreparties.co/${props.movie.image.url}`}
                    alt={props.movie.description}
                />
            </a>
            <div className="photo__title-toggle">
                <h2 className="photo__title">{props.movie.nameRU}</h2>
                <div className="photo__toggle">
                    <button
                        className={cardLikeButtonClassName}
                        type="button"
                        onClick={props.class === "default" ? like : remove}
                    />
                </div>
            </div>
            <p className="photo__duration">{time(props.movie.duration)}</p>
        </div>
    );
}

export default MoviesCard;
