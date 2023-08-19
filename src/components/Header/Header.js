import Logo from "../../images/logo.svg";
import { Link } from "react-router-dom"; 

function Header() {
    return (
        <>
            <header className="header">
                <img className="header__logo" src={Logo} alt="Логотип смайл" />
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
