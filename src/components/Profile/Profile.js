import HeaderMovies from "../HeaderMovies/HeaderMovies.js";
import { useContext } from "react";
import { UserContext } from "../../contexts/CurrentUserContext.js";
import { Link, useNavigate } from "react-router-dom";
import "./Profile.css";

function Profile(props) {
    const currentUser = useContext(UserContext);
    const navigate = useNavigate();

    return (
        <>
            <HeaderMovies />
            <main>
                <div className="profile">
                    <h1 className="profile__title profile__title_profile">
                        Привет, {currentUser.name}!
                    </h1>
                    <div className="profile__form">
                        <div className="profile__input-titles">
                            <p className="profile__title-name">Имя</p>
                            <p className="profile__title-email">E-mail</p>
                        </div>
                        <div className="profile__inputs">
                            <p className="profile__input profile__input_name">
                                {currentUser.name}
                            </p>

                            <p className="profile__input profile__input_email">
                                {currentUser.email}
                            </p>
                        </div>
                    </div>
                    <p>{props.userMessage}</p>
                    <button
                        className="profile__button-register"
                        onClick={() => navigate("/edit")}
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
