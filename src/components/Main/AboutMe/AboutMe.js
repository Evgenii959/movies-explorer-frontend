import Student from "../../../images/student.jpg";
import Portfolio from "../Portfolio/Portfolio.js";

function AboutMe() {
    return (
        <>
            <section className="student">
                <h3 className="student__header">Студент</h3>
                <div className="student__card">
                    <div className="student__text">
                        <h4 className="student__name">Виталий</h4>
                        <p className="student__profession">
                            Фронтенд-разработчик, 30 лет
                        </p>
                        <p className="student__about">
                            Я родился и живу в Саратове, закончил факультет
                            экономики СГУ. У меня есть жена и дочь. Я люблю
                            слушать музыку, а ещё увлекаюсь бегом. Недавно начал
                            кодить. С 2015 года работал в компании «СКБ Контур».
                            После того, как прошёл курс по веб-разработке, начал
                            заниматься фриланс-заказами и ушёл с постоянной
                            работы.
                        </p>
                        <p className="student__from">Github</p>
                    </div>
                    <img
                        src={Student}
                        className="student__image"
                        alt="Студент"
                    />
                </div>
                <Portfolio />
            </section>
        </>
    );
}

export default AboutMe;
