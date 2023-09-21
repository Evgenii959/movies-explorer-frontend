import { Link } from "react-router-dom";
import RegisterHeader from "../Register/RegisterHeader.js";
import { checkError, Validation } from "../Validation/validation";
function Login(props) {
    const { register, handleSubmit, errors, isValid } = Validation();

    const formSubmit = (data) => {
        props.handleLogin(data);
    };

    return (
        <>
            <RegisterHeader />
            <main>
                <div className="profile">
                    <h1 className="profile__title profile__title_register">
                        Рады видеть!
                    </h1>
                    <form
                        className="profile__form profile__form_register"
                        onSubmit={handleSubmit(formSubmit)}
                    >
                        <fieldset className="profile__block-input">
                            <legend className="profile__block-name">
                                E-mail
                            </legend>
                            <input
                                className="profile__input profile__input_register"
                                type="email"
                                name="email"
                                id="email"
                                {...register("email", checkError("email"))}
                            />
                            <span className="profile__name-error">
                                {errors.email ? errors.email.message : ""}
                            </span>
                        </fieldset>
                        <fieldset className="profile__block-input">
                            <legend className="profile__block-name">
                                Пароль
                            </legend>
                            <input
                                className="profile__input profile__input_register"
                                type="password"
                                name="Пароль"
                                id="password"
                                {...register(
                                    "password",
                                    checkError("password")
                                )}
                            />
                            <span className="profile__name-error">
                                {errors.password ? errors.password.message : ""}
                            </span>
                        </fieldset>
                        <button
                            className="profile__button-register"
                            type="submit"
                            disabled={!isValid}
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
