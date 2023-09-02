import { Routes, Route, useNavigate } from "react-router-dom";
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
import { getMovies } from "../utils/MoviesApi.js";
import {
    register,
    login,
    editUser,
    changeLikeCardStatus
} from "../utils/MainApi.js";
import { UserContext } from "../contexts/CurrentUserContext";

function App() {
    const [menuActive, setMenuActive] = useState(false);
    const [cards, setCards] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const navigate = useNavigate();


    useEffect(() => {
        getMovies()
            .then(res => {
                setCards(res);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const handleRegister = ({ name, email, password }) => event => {
        event.preventDefault();
        register({ name, email, password })
            .then(res => {
                if (res !== false) {
                    navigate("/signin", { replace: true });
                }
            })
            .catch(err => {
                console.log(err);
            });
    };

    const handleLogin = ({ email, password }) => {
        login({ email, password })
            .then(res => {
                if (res !== false) {
                    navigate("/movies", { replace: true });
                    setIsLoggedIn(true);
                }
            })
            .catch(err => {
                console.log(err);
            });
    };

    function handleUpdateUser(user) {
        editUser(user)
            .then(res => {
                setCurrentUser(res);
            })
            .catch(err => {
                console.log(err);
            });
    }

    function handleUserLeave() {
        localStorage.removeItem("jwt");
    }

    const items = [
        { value: "Главная", href: "/" },
        { value: "Фильмы", href: "/movies" },
        { value: "Сохраненные фильмы", href: "/saved-movies" }
    ];
    return (
        <UserContext.Provider value={currentUser}>
            <Routes>
                {/*                 <Route
                    path="/"
                    element={
                        isLoggedIn ? (
                            <Navigate to="/movies" replace />
                        ) : (
                            <Navigate to="/signin" replace />
                        )
                    }
                /> */}
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
                    element={
                        <ProtectedRoute
                            element={Profile}
                            onUpdateUser={handleUpdateUser}
                            handleUserLeave={handleUserLeave}
                        />
                    }
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Menu active={menuActive} setActive={setMenuActive} items={items} />
        </UserContext.Provider>
    );
}

export default App;
