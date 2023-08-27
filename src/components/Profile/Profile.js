import HeaderMovies from "../Movies/HeaderMovies/HeaderMovies.js";

function Profile() {
    return (
        <>
            <HeaderMovies />
            <main>
                <div className="profile">
                    <h1 className="profile__title profile__title_profile">
                        Привет, Виталий!
                    </h1>
                    <form className="profile__form">
                        <div className="profile__input-titles">
                            <p className="profile__title-name">Имя</p>
                            <p className="profile__title-email">E-mail</p>
                        </div>
                        <div className="profile__inputs">
                            <input
                                className="profile__input profile__input_name"
                                placeholder="Имя"
                                title="Что-то пошло не так..."
                                required
                            />
                            <span className="profile__name-error">
                                Что-то пошло не так...
                            </span>
                            <input
                                className="profile__input profile__input_email"
                                placeholder="E-mail"
                                title="Что-то пошло не так..."
                                required
                            />
                            <span className="profile__name-error">
                                Что-то пошло не так...
                            </span>
                        </div>
                    </form>
                    <p className="profile__edit">Редактировать</p>
                    <p className="profile__leave">Выйти из аккаунта</p>
                </div>
            </main>
        </>
    );
}

export default Profile;
