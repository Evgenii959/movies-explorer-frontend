import { Link } from "react-router-dom"; 

function Header() {
    return (
        <>
            <header className="header">
                <Link to="/" className="header__logo"/>
                <div className="header__enter-auth">
                    <Link to="/signup" className="header__auth">
                        Регистрация
                    </Link>
                    <Link to="/signin" className="header__enter">
                        Войти
                    </Link>
                </div>
            </header>
        </>
    );
}

export default Header;
