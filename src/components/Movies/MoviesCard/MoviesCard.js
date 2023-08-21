import OnePicture from "../../../images/1q.jpg";

function MoviesCard() {
    return (
        <>
            <div className="photo__container">
                <img
                    className="photo__item"
                    src={OnePicture}
                    alt="Слова о дизайне"
                />
                <div className="photo__title-toggle">
                    <h2 className="photo__title">33 слова о дизайне</h2>
                    <div className="photo__toggle">
                        <button
                            className="photo__heart"
                            type="button"
                        />
                    </div>
                </div>
                <p className="photo__duration">1ч 42м</p>
            </div>
        </>
    );
}

export default MoviesCard;
