function MoviesCard(props) {
    const cardLikeButtonClassName = `photo__heart ${props.isLiked &&
        "photo__heart_aktiv"}`;
    const hours = Math.floor(props.element.duration / 60);
    const minutes = props.element.duration % 60;

    return (
        <>
            <div className="photo__container">
                <a href={props.element.trailerLink} target="blank">
                    <img
                        className="photo__item"
                        src={`https://api.nomoreparties.co/${props.element.image.url}`}
                        alt={props.element.description}
                    />
                </a>
                <div className="photo__title-toggle">
                    <h2 className="photo__title">{props.element.nameRU}</h2>
                    <div className="photo__toggle">
                        <button
                            className={cardLikeButtonClassName}
                            type="button"
                            onClick={props.addLikedMovie(props.element)}
                        />
                    </div>
                </div>
                <p className="photo__duration">
                    {hours > 0 ? `${hours}ч` : ""} {minutes}мин
                </p>
            </div>
        </>
    );
}

export default MoviesCard;
