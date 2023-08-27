import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
/* import Main from "./Main/Main.js"; */
import Movies from "./Movies/Movies.js";
import Register from "./Register/Register.js";
import Login from "./Login/Login.js";
import Profile from "./Profile/Profile.js";
import NotFound from "./Page404/Page404.js";
import SavedMovies from "./SavedMovies/SavedMovies.js";
import Menu from "./Menu/Menu.js";
import { useState, useEffect } from "react";
import { ProtectedRoute } from "./ProtectedRoute.js";
import { api } from "../utils/MainApi.js";
import { register, login } from "../utils/MoviesApi.js";
import { UserContext } from "../contexts/CurrentUserContext";

function App() {
    const [menuActive, setMenuActive] = useState(false);
    const [cards, setCards] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        api.getInitialMovies()
            .then(res => {
                setCards(res);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const handleRegister = ({ name, email, password }) => event => {
        event.preventDefault();
        register(name, email, password)
            .then(res => {
                if (res !== false) {
                    navigate("/signin", { replace: true });
                }
            })
            .catch(err => {
                console.log(err);
            });
    };

    const handleLogin = ({ password, email }) => event => {
        event.preventDefault();
        login(password, email)
            .then(res => {
                if (res !== false) {
                    navigate("/", { replace: true });
                }
            })
            .catch(err => {
                console.log(err);
                setIsLoggedIn(false);
            });
    };

    const items = [
        { value: "Главная", href: "/" },
        { value: "Фильмы", href: "/movies" },
        { value: "Сохраненные фильмы", href: "/saved-movies" }
    ];
    return (
        <UserContext.Provider>
            <Routes>
                <Route
                    path="/"
                    element={
                        isLoggedIn ? (
                            <Navigate to="/movies" replace />
                        ) : (
                            <Navigate to="/signin" replace />
                        )
                    }
                />
                <Route
                    path="/movies"
                    element={
                        <ProtectedRoute
                            element={Movies}
                            isLoggedIn={isLoggedIn}
                            cards={cards}
                        />
                    }
                />
                <Route
                    path="/saved-movies"
                    element={<ProtectedRoute element={SavedMovies} />}
                />
                <Route
                    path="/signup"
                    element={<Register handleRegister={handleRegister} />}
                />
                <Route
                    path="/signin"
                    element={<Login handleLogin={handleLogin} />}
                />
                <Route
                    path="/profile"
                    element={<ProtectedRoute element={Profile} />}
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Menu active={menuActive} setActive={setMenuActive} items={items} />
        </UserContext.Provider>
    );
}

export default App;
