import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <>
            <div className="notFound">
                <h1 className="notFound__title">404</h1>
                <p className="notFound__subtitle">Страница не найдена</p>
                <button onClick={goBack} className="notFound__back">
                    Назад
                </button>
            </div>
        </>
    );
}

export default NotFound;
