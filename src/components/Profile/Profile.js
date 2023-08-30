import HeaderMovies from "../Movies/HeaderMovies/HeaderMovies.js";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../contexts/CurrentUserContext.js";
import { Link } from "react-router-dom";

function Profile(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const currentUser = useContext(UserContext);

    useEffect(() => {
        setName(currentUser.name);
        setEmail(currentUser.email);
    }, [currentUser]);

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeDescription(e) {
        setEmail(e.target.value);
    }

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
        console.log("test");
        // Передаём значения управляемых компонентов во внешний обработчик
        props.onUpdateUser({
            name,
            email
        });
    }

    return (
        <>
            <HeaderMovies />
            <main>
                <div className="profile">
                    <h1 className="profile__title profile__title_profile">
                        Привет, Виталий!
                    </h1>
                    <form className="profile__form">
                        <div className="profile__input-titles">
                            <p className="profile__title-name">Имя</p>
                            <p className="profile__title-email">E-mail</p>
                        </div>
                        <div className="profile__inputs">
                            <input
                                className="profile__input profile__input_name"
                                placeholder="Имя"
                                title="Что-то пошло не так..."
                                onChange={handleChangeName}
                                required
                            />
                            <span className="profile__name-error">
                                Что-то пошло не так...
                            </span>
                            <input
                                className="profile__input profile__input_email"
                                placeholder="E-mail"
                                title="Что-то пошло не так..."
                                onChange={handleChangeDescription}
                                required
                            />
                            <span className="profile__name-error">
                                Что-то пошло не так...
                            </span>
                        </div>
                    </form>
                    <p className="profile__edit" handleSubmit={handleSubmit}>
                        Редактировать
                    </p>
                    <Link
                        to="/signin"
                        className="profile__leave"
                        onClick={props.handleUserLeave}
                    >
                        Выйти из аккаунта
                    </Link>
                </div>
            </main>
        </>
    );
}

export default Profile;
