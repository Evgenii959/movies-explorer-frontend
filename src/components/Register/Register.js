import { NavLink } from "react-router-dom";
import RegisterHeader from "../Register/RegisterHeader.js";

function Register() {
    return (
        <>
            <RegisterHeader />
            <div className="profile profile__register">
                <h1 className="profile__title profile__title_register">
                    Добро пожаловать!
                </h1>
                <form className="profile__form profile__form_register">
                    <div className="profile__inputs profile__inputs_register">
                        <fieldset className="profile__block-input">
                            <legend className="profile__block-name">
                                Имя
                            </legend>
                            <input
                                className="profile__input profile__input_register"
                                type="text"
                                name="name"
                                placeholder="Виталий"
                            />
                        </fieldset>
                        <fieldset className="profile__block-input">
                            <legend className="profile__block-name">
                                E-mail
                            </legend>
                            <input
                                className="profile__input profile__input_register"
                                type="text"
                                name="email"
                                placeholder="pochta@yandex.ru"
                            />
                        </fieldset>
                        <fieldset className="profile__block-input">
                            <legend className="profile__block-name">
                                Пароль
                            </legend>
                            <input
                                className="profile__input profile__input_register"
                                type="text"
                                name="password"
                                placeholder="asdcas"
                            />
                        </fieldset>
                    </div>
                </form>
                <button className="profile__button-register" type="button">
                    Зарегистрироваться
                </button>
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
