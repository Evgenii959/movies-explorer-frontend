import { Routes, Route, useNavigate } from "react-router-dom";
import Main from "./Main/Main.js";
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
    loginWithToken,
    deleteMovie,
    signOut,
    getSavedMovies,
    saveMovie,
} from "../utils/MainApi.js";
import { UserContext } from "../contexts/CurrentUserContext";
import EditProfile from "./EditProfile/EditProfile";
import Preloader from "./Preloader/Preloader";

function App() {
    const [menuActive, setMenuActive] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [isToken, setIsToken] = useState(false);
    const navigate = useNavigate();
    const [openPreloader, setOpenPreloader] = useState(true);
    const [savedMovies, setSavedMovies] = useState([]);
    const [movies, setMovies] = useState([]);
    const [userMessage, setUserMessage] = useState("");

    useEffect(() => {
        setTimeout(() => {
            setUserMessage("");
        }, 5000);
    }, [userMessage]);

    const handleRegister = ({ name, email, password }) => {
        register({ name, email, password })
            .then((res) => {
                if (res !== false) {
                    navigate("/signin", { replace: true });
                    handleLogin({ email, password });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleTokenCheck = () => {
        loginWithToken()
            .then((res) => {
                if (res) {
                    setIsLoggedIn(true);
                    setCurrentUser(res);
                }
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => setIsToken(true));
    };

    useEffect(() => {
        handleTokenCheck();
    }, [isLoggedIn]);

    const handleLogin = ({ email, password }) => {
        login({ email, password })
            .then((res) => {
                if (res !== false) {
                    navigate("/movies", { replace: true });
                    setIsLoggedIn(true);
                }
            })
            .catch((err) => {
                console.log(err);
                setIsLoggedIn(false);
            });
    };

    function logOut() {
        signOut()
            .then((res) => {
                if (res !== false) {
                    setIsLoggedIn(false);
                    navigate("/", { replace: true });
                    localStorage.clear();
                    setUserMessage("");
                    setCurrentUser({});
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function handleUpdateUser({ name, email }) {
        editUser({ name, email })
            .then((res) => {
                setCurrentUser(res);
                navigate("/profile");
                setUserMessage("Профиль обновлен");
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function getBitFilmsMovies(search) {
        setOpenPreloader(true);
        getMovies()
            .then((movies) => {
                const updatedMovies = movies.map((movie) => {
                    const savedMovie = savedMovies.find(
                        (item) => item.movieId === movie.id,
                    );
                    if (savedMovie) {
                        return { ...movie, class: "like", key: movie.id };
                    }
                    return { ...movie, class: "default", key: movie.id };
                });
                search(true);
                setMovies(updatedMovies);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setOpenPreloader(false);
            });
    }

    useEffect(() => {
        if (!isLoggedIn) return;
        setOpenPreloader(true);

        getSavedMovies()
            .then((savedMovies) => {
                const updatedSavedMovies = savedMovies.map((movie) => {
                    return { ...movie, class: "remove", key: movie._id };
                });
                setSavedMovies(updatedSavedMovies);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setOpenPreloader(false);
            });
    }, [isLoggedIn]);

    const addLikedMovie = (movie) => {
        setOpenPreloader(true);
        saveMovie(movie)
            .then((res) => {
                setMovies((state) =>
                    state.map((el) =>
                        el.id === res.movieId ? { ...el, class: "like" } : el,
                    ),
                );
                res.class = "remove";
                setSavedMovies((prevMovies) => [...prevMovies, res]);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setOpenPreloader(false);
            });
    };

    const removeMovie = (movieID) => {
        setOpenPreloader(true);
        const removedMovie = savedMovies.find((item) => {
            return item.movieId === movieID ? item : "";
        });

        deleteMovie(removedMovie._id)
            .then(() => {
                setSavedMovies((state) =>
                    state.filter((el) => el.movieId !== movieID),
                );

                setMovies((state) =>
                    state.map((el) =>
                        el.id === movieID ? { ...el, class: "default" } : el,
                    ),
                );
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setOpenPreloader(false);
            });
    };

    const items = [
        { value: "Главная", href: "/" },
        { value: "Фильмы", href: "/movies" },
        { value: "Сохраненные фильмы", href: "/saved-movies" },
    ];

    return (
        <>
            {isToken && (
                <UserContext.Provider value={currentUser}>
                    <Routes>
                        <Route
                            path="/"
                            element={<Main isLoggedIn={isLoggedIn} />}
                        />
                        <Route
                            path="/movies"
                            element={
                                <ProtectedRoute
                                    element={Movies}
                                    isLoggedIn={isLoggedIn}
                                    movies={movies}
                                    addLikedMovie={addLikedMovie}
                                    removeMovie={removeMovie}
                                    getBitFilmsMovies={getBitFilmsMovies}
                                />
                            }
                        />
                        <Route
                            path="/saved-movies"
                            element={
                                <ProtectedRoute
                                    element={SavedMovies}
                                    isLoggedIn={isLoggedIn}
                                    removeMovie={removeMovie}
                                    savedMovies={savedMovies}
                                />
                            }
                        />
                        <Route
                            path="/signup"
                            element={
                                <Register
                                    handleRegister={handleRegister}
                                    isLoggedIn={isLoggedIn}
                                />
                            }
                        />
                        <Route
                            path="/signin"
                            element={
                                <Login
                                    handleLogin={handleLogin}
                                    isLoggedIn={isLoggedIn}
                                />
                            }
                        />
                        <Route
                            path="/profile"
                            element={
                                <ProtectedRoute
                                    element={Profile}
                                    isLoggedIn={isLoggedIn}
                                    logOut={logOut}
                                    userMessage={userMessage}
                                />
                            }
                        />
                        <Route
                            path="/edit"
                            element={
                                <ProtectedRoute
                                    element={EditProfile}
                                    handleUpdateUser={handleUpdateUser}
                                    isLoggedIn={isLoggedIn}
                                />
                            }
                        />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    <Menu
                        active={menuActive}
                        setActive={setMenuActive}
                        items={items}
                    />
                    <Preloader openPreloader={openPreloader} />
                </UserContext.Provider>
            )}
        </>
    );
}

export default App;
