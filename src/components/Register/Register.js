import { NavLink } from "react-router-dom";
import RegisterHeader from "../Register/RegisterHeader.js";
import { useState } from "react";

function Register(props) {
    const [name, setName] = useState({ name: "" });
    const [email, setEmail] = useState({ email: "" });
    const [password, setPassword] = useState({ password: "" });

    function handleName(event) {
        setName(event.target.value);
    }

    function handleEmail(event) {
        setEmail(event.target.value);
    }

    function handlePassword(event) {
        setPassword(event.target.value);
    }

    return (
        <>
            <RegisterHeader />
            <div className="profile profile__register">
                <h1 className="profile__title profile__title_register">
                    Добро пожаловать!
                </h1>
                <form
                    className="profile__form profile__form_register"
                    onSubmit={props.handleRegister({ name, email, password })}
                >
                    <fieldset className="profile__block-input">
                        <legend className="profile__block-name">Имя</legend>
                        <input
                            className="profile__input profile__input_register"
                            type="text"
                            name="name"
                            minLength="2"
                            maxLength="40"
                            placeholder="Имя"
                            title="Что-то пошло не так..."
                            onChange={handleName}
                            value={name.name}
                            required
                        />
                        <span className="profile__name-error">
                            Что-то пошло не так...
                        </span>
                    </fieldset>
                    <fieldset className="profile__block-input">
                        <legend className="profile__block-name">E-mail</legend>
                        <input
                            className="profile__input profile__input_register"
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            title="Что-то пошло не так..."
                            onChange={handleEmail}
                            value={email.email}
                            required
                        />
                        <span className="profile__name-error">
                            Что-то пошло не так...
                        </span>
                    </fieldset>
                    <fieldset className="profile__block-input">
                        <legend className="profile__block-name">Пароль</legend>
                        <input
                            className="profile__input profile__input_register"
                            type="password"
                            name="password"
                            placeholder="***********"
                            title="Что-то пошло не так..."
                            onChange={handlePassword}
                            value={password.password}
                            required
                        />
                        <span className="profile__name-error">
                            Что-то пошло не так...
                        </span>
                    </fieldset>
                    <button className="profile__button-register" type="submit">
                        Зарегистрироваться
                    </button>
                </form>
                <div className="profile__footer-register">
                    <h2 className="profile__question-register">
                        Уже зарегистрированы?
                    </h2>
                    <NavLink to="/signin" className="profile__enter-register">
                        Войти
                    </NavLink>
                </div>
            </div>
        </>
    );
}

export default Register;
