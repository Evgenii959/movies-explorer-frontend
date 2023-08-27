import { Link } from "react-router-dom";
import RegisterHeader from "../Register/RegisterHeader.js";

function Login() {
    return (
        <>
            <RegisterHeader />
            <main>
                <div className="profile profile__register">
                    <h1 className="profile__title profile__title_register">
                        Рады видеть!
                    </h1>
                    <form className="profile__form profile__form_register">
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
