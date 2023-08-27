import { NavLink } from "react-router-dom";
import RegisterHeader from "../Register/RegisterHeader.js";
import { useState } from "react";
import * as MoviesApi from "../../utils/MoviesApi.js";

function Register() {
    const [formValue, setFormValue] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormValue({
            ...formValue,
            [name]: value
        });
    };

    const handleSubmit = e => {
        const { name, email, password } = formValue;
        e.preventDefault();
        MoviesApi.register(name, email, password).then(() => {
            console.log("data")
        });
    };
    /*     const [name, setName] = useState({ name: "" });
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
    } */

    return (
        <>
            <RegisterHeader />
            <div className="profile profile__register">
                <h1 className="profile__title profile__title_register">
                    Добро пожаловать!
                </h1>
                <form
                    className="profile__form profile__form_register"
                    onSubmit={handleSubmit}
                    /*     onSubmit={props.handleRegister({ name, email, password })} */
                >
                    <fieldset className="profile__block-input">
                        <legend className="profile__block-name">Имя</legend>
                        <input
                            className="profile__input profile__input_register"
                            type="text"
                            name="name"
                            placeholder="Имя"
                            onChange={handleChange}
                            value={formValue.name}
                            title="Что-то пошло не так..."
                            /*          onChange={handleName} */
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
                            type="text"
                            name="email"
                            placeholder="E-mail"
                            onChange={handleChange}
                            value={formValue.email}
                            title="Что-то пошло не так..."
                            /*        onChange={handleEmail} */
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
                            type="text"
                            name="password"
                            placeholder="***********"
                            onChange={handleChange}
                            value={formValue.password}
                            title="Что-то пошло не так..."
                            /*        onChange={handlePassword} */
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
