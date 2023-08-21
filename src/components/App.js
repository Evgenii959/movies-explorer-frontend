import { Routes, Route } from "react-router-dom";
import Main from "./Main/Main.js";
import Movies from "./Movies/Movies.js";
import Register from "./Register/Register.js";
import Login from "./Login/Login.js";
import Profile from "./Profile/Profile.js";
import NotFound from "./Page404/Page404.js";
import SavedMovies from "./SavedMovies/SavedMovies.js";
import { UserContext } from "../contexts/CurrentUserContext";
import Menu from "./Menu/Menu.js";
import { useState } from "react";

function App() {
    const [menuActive, setMenuActive] = useState(false);
    const items = [
        { value: "Главная", href: "/" },
        { value: "Фильмы", href: "/movies" },
        { value: "Сохраненные фильмы", href: "/saved-movies" },
    ];
    return (
        <UserContext.Provider>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/saved-movies" element={<SavedMovies />} />
                <Route path="/signup" element={<Register />} />
                <Route path="/signin" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Menu active={menuActive} setActive={setMenuActive} items={items} />
        </UserContext.Provider>
    );
}

export default App;
