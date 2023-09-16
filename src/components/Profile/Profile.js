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

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.handleUpdateUser({ name, email });
    }

    return (
        <>
            <HeaderMovies />
            <main>
                <div className="profile">
                    <h1 className="profile__title profile__title_profile">
                        Привет, {currentUser.name}!
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
                                minLength="2"
                                maxLength="40"
                                title="Что-то пошло не так..."
                                onChange={handleChangeName}
                                value={name || ""}
                                required
                            />
                            {/* <span className="profile__name-error">
                                Что-то пошло не так...
                            </span> */}
                            <input
                                className="profile__input profile__input_email"
                                placeholder="E-mail"
                                title="Что-то пошло не так..."
                                onChange={handleChangeEmail}
                                type="email"
                                value={email || ""}
                                required
                            />
                            {/* <span className="profile__name-error">
                                Что-то пошло не так...
                            </span> */}
                        </div>
                    </form>
                    <button
                        class="profile__button-register"
                        onClick={handleSubmit}
                    >
                        Редактировать
                    </button>
                    <Link
                        to="/signin"
                        className="profile__leave"
                        onClick={props.logOut}
                    >
                        Выйти из аккаунта
                    </Link>
                </div>
            </main>
        </>
    );
}

export default Profile;
