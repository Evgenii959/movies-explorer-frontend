import OnePicture from "../../../images/1q.jpg";
import HeartPicture from "../../../images/heart.svg";

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
                        <img
                            className="photo__heart"
                            src={HeartPicture}
                            alt="Сердце"
                        />
                    </div>
                </div>
                <p className="photo__duration">1ч 42м</p>
            </div>
        </>
    );
}

export default MoviesCard;
