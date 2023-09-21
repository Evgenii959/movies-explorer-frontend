import { NavLink } from "react-router-dom";
import RegisterHeader from "../Register/RegisterHeader.js";
import { checkError, Validation } from "../Validation/validation";

function Register(props) {
    const { register, handleSubmit, errors, isValid } = Validation();

    const formSubmit = (data) => {
        console.log(data);
        props.handleRegister(data);
    };

    return (
        <>
            <RegisterHeader />
            <div className="profile">
                <h1 className="profile__title profile__title_register">
                    Добро пожаловать!
                </h1>
                <form
                    className="profile__form profile__form_register"
                    onSubmit={handleSubmit(formSubmit)}
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
                            {...register("name", checkError("name"))}
                            required
                        />
                        <span className="profile__name-error">
                            {errors.name ? errors.name.message : ""}
                        </span>
                    </fieldset>
                    <fieldset className="profile__block-input">
                        <legend className="profile__block-name">E-mail</legend>
                        <input
                            className="profile__input profile__input_register"
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            {...register("email", checkError("email"))}
                            required
                        />
                        <span className="profile__name-error">
                            {errors.email ? errors.email.message : ""}
                        </span>
                    </fieldset>
                    <fieldset className="profile__block-input">
                        <legend className="profile__block-name">Пароль</legend>
                        <input
                            className="profile__input profile__input_register"
                            type="password"
                            name="password"
                            placeholder="***********"
                            {...register("password", checkError("password"))}
                            required
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
