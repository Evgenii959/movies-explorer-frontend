import HeaderMovies from "../Movies/HeaderMovies/HeaderMovies.js";

function Profile() {
    return (
        <>
            <HeaderMovies />
            <div className="profile">
                <h1 className="profile__title profile__title_profile">
                    Привет, Виталий!
                </h1>
                <form className="profile__form">
                    <div className="profile__input-titles">
                        <div className="profile__title-name">Имя</div>
                        <div className="profile__title-email">E-mail</div>
                    </div>
                    <div className="profile__inputs">
                        <input
                            className="profile__input profile__input_name"
                            placeholder="Виталий"
                        />
                        <input
                            className="profile__input profile__input_email"
                            placeholder="pochta@yandex.ru"
                        />
                    </div>
                </form>
                <p className="profile__edit">Редактировать</p>
                <p className="profile__leave">Выйти из аккаунта</p>
            </div>
        </>
    );
}

export default Profile;
