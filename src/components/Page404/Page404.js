import { NavLink } from "react-router-dom";

function NotFound() {
    return (
        <>
            <div className="notFound">
                <h1 className="notFound__title">404</h1>
                <p className="notFound__subtitle">Страница не найдена</p>
                <NavLink to="/" className="notFound__back">
                    Назад
                </NavLink>
            </div>
        </>
    );
}

export default NotFound;
