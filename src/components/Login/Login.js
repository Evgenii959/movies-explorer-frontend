import { Link } from "react-router-dom";
import RegisterHeader from "../Register/RegisterHeader.js";
import { useState } from "react";
import { useForm } from "react-hook-form";

function Login(props) {
    const [email, setEmail] = useState({ email: "" });
    const [password, setPassword] = useState({ password: "" });
/*     const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset
    } = useForm({ mode: "onBlur" }); */

    function handleLoginEmail(event) {
        setEmail(event.target.value);
    }

    function handleLoginPassword(event) {
        setPassword(event.target.value);
    }

    function formSubmit(event) {
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
                        onSubmit={formSubmit}
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
                                onChange={handleLoginEmail}
                                /* {...register("email", {
                                    required: "Поле обязательно к заполнению",
                                    minLength: {
                                        value: email,
                                        message: "Минимум 5 символов"
                                    }
                                })} */
                            />
                            <span className="profile__name-error">
                                {/* {errors?.email && (
                                    <p>{errors?.email?.message || "Error"}</p>
                                )} */}
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
                                onChange={handleLoginPassword}
                                /* {...register("password", {
                                    required: "Поле обязательно к заполнению",
                                    minLength: {
                                        value: password,
                                        message: "Минимум 5 символов"
                                    }
                                })} */
                            />
                            <span className="profile__name-error">
                                {/* {errors?.password && (
                                    <p>
                                        {errors?.password?.message || "Error"}
                                    </p>
                                )} */}
                            </span>
                        </fieldset>
                        <input
                            className="profile__button-register"
                            type="submit"
                            /* disabled={!isValid} */
                        />
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
