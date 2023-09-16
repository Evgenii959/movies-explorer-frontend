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
import Cookies from "js-cookie";
import {
    register,
    login,
    editUser,
    getUser,
    loginWithToken,
    deleteMovie,
    signOut,
    getSavedMovies,
    saveMovie
} from "../utils/MainApi.js";
import {
    UserContext,
    SavedMoviesContext
} from "../contexts/CurrentUserContext";

function App() {
    const [menuActive, setMenuActive] = useState(false);
    const [cards, setCards] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [filter, setFilter] = useState("");
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [likedMovies, setLikedMovies] = useState([]);
    const [isToken, setIsToken] = useState(false);
    /*     const [load, setLoad] = useState(false) */
    const navigate = useNavigate();

    useEffect(() => {
        const logged = Cookies.set("jwt");
        if (logged) {
            getMovies()
                .then(data => {
                    setCards(data);
                    setIsToken(true);
                })
                .catch(err => {
                    console.log(err);
                });

            const savedLikedMovies = Cookies.get("jwt") || [];
            setLikedMovies(savedLikedMovies);
        } else {
            setIsLoggedIn(false);
            setIsToken(true);
        }
    }, []);

    useEffect(() => {
        const logged = Cookies.set("jwt");
        if (logged) {
            getSavedMovies()
                .then(data => {
                    setLikedMovies(data);
                })
                .catch(err => {
                    console.log(err);
                });

            const savedLikedMovies = Cookies.get("jwt") || [];
            setLikedMovies(savedLikedMovies);
        } else {
            setIsLoggedIn(false);
            setIsToken(true);
        }
    }, []);

    const handleFilterChange = event => {
        setFilter(event.target.value);
    };

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

    const handleTokenCheck = () => {
        loginWithToken()
            .then(res => {
                if (res) {
                    setIsLoggedIn(true);
                    setCurrentUser(res);
                }
            })
            .catch(err => {
                console.log(err);
            });
    };

    useEffect(() => {
        handleTokenCheck();
    }, []);

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
                setIsLoggedIn(false);
            });
    };

    function logOut() {
        signOut()
            .then(res => {
                res.clearCookie("jwt", { path: "/" });
                navigate("/");
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    }

    function handleUpdateUser({ name, email }) {
        editUser({ name, email })
            .then(res => {
                setCurrentUser(res);
            })
            .catch(err => {
                console.log(err);
            });
    }

    const saveLikedMoviesToCookies = movies => {
        Cookies.set("jwt", movies, { expires: 365 });
    };

    const addLikedMovie = movie => {
        const likedMoviesArray = Object.values(likedMovies);
        // Проверяем, был ли фильм уже добавлен в список понравившихся
        if (!likedMoviesArray.find(m => m.id === movie.id)) {
            const updatedLikedMovies = [...likedMovies, movie];
            setLikedMovies(updatedLikedMovies);
            saveLikedMoviesToCookies(updatedLikedMovies); // Сохраняем в cookie

            saveMovie(movie)
                .then(data => {
                    console.log("Фильм добавлен:", data);
                })
                .catch(err => console.log("error", err));
        }
    };

    const removeCard = movie => {
        const updatedLikedMovies = likedMovies.filter(m => m.id !== movie.id);
        setLikedMovies(updatedLikedMovies);
        saveLikedMoviesToCookies(updatedLikedMovies);

        deleteMovie(movie)
            .then(() => {
                const updatedLikedMovies = likedMovies.filter(
                    m => m.id !== movie.id
                );
                setLikedMovies(updatedLikedMovies);
            })
            .then(data => {
                console.log("Фильм удален:", data);
                removeCard(movie);
            })
            .catch(err => console.log("error", err));
    };

    const items = [
        { value: "Главная", href: "/" },
        { value: "Фильмы", href: "/movies" },
        { value: "Сохраненные фильмы", href: "/saved-movies" }
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
                                    filteredMovies={filteredMovies}
                                    filter={filter}
                                    setFilteredMovies={setFilteredMovies}
                                    cards={cards}
                                    handleFilterChange={handleFilterChange}
                                    addLikedMovie={addLikedMovie}
                                />
                            }
                        />
                        <Route
                            path="/saved-movies"
                            element={
                                <ProtectedRoute
                                    element={SavedMovies}
                                    likedMovies={likedMovies}
                                    isLoggedIn={isLoggedIn}
                                    filter={filter}
                                    setFilteredMovies={setFilteredMovies}
                                    handleFilterChange={handleFilterChange}
                                    removeCard={removeCard}
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
                                    handleUpdateUser={handleUpdateUser}
                                    isLoggedIn={isLoggedIn}
                                    logOut={logOut}
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
                </UserContext.Provider>
            )}
        </>
    );
}

export default App;
