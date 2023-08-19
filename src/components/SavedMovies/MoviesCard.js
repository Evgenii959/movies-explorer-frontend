import OnePicture from "../../images/1q.jpg";
import Cross from "../../images/крест.svg";

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
                    <div className="photo__toggle photo__toggle_delete">
                        <img
                            className="photo__delete"
                            src={Cross}
                            alt="крест"
                        />
                    </div>
                </div>
                <p className="photo__duration">1ч 42м</p>
            </div>
        </>
    );
}

export default MoviesCard;
