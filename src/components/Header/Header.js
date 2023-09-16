import Menu from "../Menu/Menu.js";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header(props) {
    const items = [
        { value: "Главная", href: "/" },
        { value: "Фильмы", href: "/movies" },
        { value: "Сохраненные фильмы", href: "/saved-movies" }
    ];
    const [menuActive, setMenuActive] = useState(false);
    return (
        <>
            <header className="header">
                <Link to="/" className="header__logo" />
                <div className="header__enter-auth">
                    {props.isLoggedIn ? (
                        (
                            <Link to="/signup" className="header__auth">
                                Регистрация
                            </Link>
                        ) && (
                            <Link to="/signin" className="header__enter">
                                Войти
                            </Link>
                        )
                    ) : (
                        <div className="header__container">
                            <Link to="/movies" className="header__films">
                                Фильмы
                            </Link>

                            <Link to="/saved-movies" className="header__films">
                                Сохранённые фильмы
                            </Link>

                            <div className="header__account-icon">
                                <Link to="/profile" className="header__account">
                                    Аккаунт
                                </Link>
                                <div className="header__icon" />
                                <div
                                    className="header__strings"
                                    onClick={() => setMenuActive(!menuActive)}
                                />
                            </div>
                        </div>
                    )}
                    <Menu
                        active={menuActive}
                        setActive={setMenuActive}
                        items={items}
                    />
                </div>
            </header>
        </>
    );
}

export default Header;
