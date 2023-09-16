function SavedMoviesCard(props) {
/*     const hours = Math.floor(props.element.duration / 60);
    const minutes = props.element.duration % 60; */
    

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
                    <div className="photo__toggle photo__toggle_delete">
                        <button
                            className="photo__delete"
                            type="button"
                            onClick={() => props.removeCard(props.element._id)}
                        />
                    </div>
                </div>
                <p className="photo__duration">
                    {/* {hours > 0 ? `${hours}ч` : ""} {minutes}мин */}
                </p>
            </div>
        </>
    );
}

export default SavedMoviesCard;
