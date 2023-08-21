import Curl from "../../../images/загагулина.png";

function Promo() {
    return (
        <>
            <section className="promo">
                <h1 className="promo__title">
                    Учебный проект студента факультета Веб-разработки.
                </h1>
                <img className="promo__image" src={Curl} alt="спираль" />
            </section>
        </>
    );
}

export default Promo;
