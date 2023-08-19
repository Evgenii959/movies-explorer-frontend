import Logo from "../../images/logo.svg";

function RegisterHeader() {
    return (
        <>
            <header className="header header__movies header__register">
                <img
                    className="header__logo header__logo_register"
                    src={Logo}
                    alt="Логотип смайл"
                />
            </header>
        </>
    );
}

export default RegisterHeader;
