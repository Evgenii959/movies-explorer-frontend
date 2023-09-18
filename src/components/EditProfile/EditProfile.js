import HeaderMovies from "../HeaderMovies/HeaderMovies.js";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../contexts/CurrentUserContext.js";
import { Link, useNavigate } from "react-router-dom";
import { checkError, Validation } from "../Validation/validation";
import "./EditProfile.css";

function EditProfile(props) {
    const navigate = useNavigate();
    const currentUser = useContext(UserContext);

    const { register, handleSubmit, setValue, watch, errors, isValid } =
        Validation();
    const [formChanged, setFormChanged] = useState(false);

    useEffect(() => {
        if (currentUser) {
            setValue("name", currentUser.name);
            setValue("email", currentUser.email);
        }
    }, [currentUser, setValue]);

    useEffect(() => {
        const nameChanged = currentUser.name !== watch("name");
        const emailChanged = currentUser.email !== watch("email");
        setFormChanged(nameChanged || emailChanged);
    }, [watch("name"), watch("email")]);

    function handleSubmitProfile(data) {
        props.handleUpdateUser(data);
    }

    return (
        <>
            <HeaderMovies />
            <main>
                <div className="profile">
                    <h1 className="profile__title profile__title_profile">
                        Привет, {currentUser.name}!
                    </h1>
                    <form
                        className="edit-profile__form"
                        onSubmit={handleSubmit(handleSubmitProfile)}
                    >
                        <div className="profile__form-input">
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
                                    {...register("name", checkError("name"))}
                                    required
                                />
                                <span className="profile__name-error">
                                    {errors.name ? errors.name.message : ""}
                                </span>
                                <input
                                    className="profile__input edit-profile__input_email"
                                    placeholder="E-mail"
                                    type="email"
                                    {...register("email", checkError("email"))}
                                    required
                                />
                                <span className="profile__name-error">
                                    {errors.email ? errors.email.message : ""}
                                </span>
                            </div>
                        </div>

                        <button
                            className="edit-profile__button-register"
                            type="submit"
                            disabled={!formChanged || !isValid}
                        >
                            Сохранить
                        </button>
                    </form>
                    <Link to="/profile" className="profile__leave">
                        Назад
                    </Link>
                </div>
            </main>
        </>
    );
}

export default EditProfile;
