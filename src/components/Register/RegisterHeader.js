import { Link } from "react-router-dom";
function RegisterHeader() {
    return (
        <>
            <header className="header header__movies header__register">
                <Link to="/" className="header__logo header__logo_register" />
            </header>
        </>
    );
}

export default RegisterHeader;
