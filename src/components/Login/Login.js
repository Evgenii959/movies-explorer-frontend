import { Link } from "react-router-dom";
import RegisterHeader from "../Register/RegisterHeader.js";
import { useState } from "react";

function Login(props) {
    const [email, setEmail] = useState({ email: "" });
    const [password, setPassword] = useState({ password: "" });

    function handleLoginEmail(event) {
        setEmail(event.target.value);
    }

    function handleLoginPassword(event) {
        setPassword(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.handleLogin({ email, password });
    }

    return (
        <>
            <RegisterHeader />
            <main>
                <div className="profile profile__register">
                    <h1 className="profile__title profile__title_register">
                        Рады видеть!
                    </h1>
                    <form
                        className="profile__form profile__form_register"
                        onSubmit={handleSubmit}
                    >
                        <fieldset className="profile__block-input">
                            <legend className="profile__block-name">
                                E-mail
                            </legend>
                            <input
                                className="profile__input profile__input_register"
                                type="text"
                                name="email"
                                placeholder="E-mail"
                                title="Что-то пошло не так..."
                                onChange={handleLoginEmail}
                                value={email.email}
                                required
                            />
                            <span className="profile__name-error">
                                Что-то пошло не так...
                            </span>
                        </fieldset>
                        <fieldset className="profile__block-input">
                            <legend className="profile__block-name">
                                Пароль
                            </legend>
                            <input
                                className="profile__input profile__input_register"
                                type="text"
                                name="Пароль"
                                placeholder="**********"
                                title="Что-то пошло не так..."
                                onChange={handleLoginPassword}
                                value={password.password}
                                required
                            />
                            <span className="profile__name-error">
                                Что-то пошло не так...
                            </span>
                        </fieldset>
                        <button
                            className="profile__button-register"
                            type="submit"
                        >
                            Войти
                        </button>
                    </form>
                    <div className="profile__footer-register">
                        <h2 className="profile__question-register">
                            Ещё не зарегистрированы?
                        </h2>
                        <Link to="/signup" className="profile__enter-register">
                            Регистрация
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Login;
