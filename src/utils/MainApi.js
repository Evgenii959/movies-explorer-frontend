const BASE_URL = "http://localhost:3000";

export function register({ name, email, password }) {
    return fetch(`${BASE_URL}/signup`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({ name, email, password })
    }).then(getResponseData);
}

export function login({ email, password }) {
    return fetch(`${BASE_URL}/signin`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({ email, password })
    }).then(getResponseData);
}

export function editUser({ name, email }) {
    return fetch(`${BASE_URL}/users/me`, {
        method: "PATCH",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({ name: name, email: email })
    }).then(getResponseData);
}

export function loginWithToken() {
    return fetch(`${BASE_URL}/users/me`, {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        }
    }).then(getResponseData);
}

export function getSavedMovies() {
    return fetch(`${BASE_URL}/saved-movies`, {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        }
    }).then(getResponseData);
}

export function saveMovie(movie) {
    return fetch(`${BASE_URL}/movies`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            country: movie.country,
            director: movie.director,
            duration: movie.duration,
            year: movie.year,
            description: movie.description,
            image: "https://api.nomoreparties.co" + movie.image.url,
            trailerLink: movie.trailerLink,
            thumbnail:
                "https://api.nomoreparties.co" +
                movie.image.formats.thumbnail.url,
            movieId: movie.movieId,
            nameRU: movie.nameRU,
            nameEN: movie.nameEN
        })
    }).then(getResponseData);
}

export function signOut() {
    return fetch(`${BASE_URL}/signout`, {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        }
    }).then(getResponseData);
}

export function deleteMovie(movieId) {
    return fetch(`${BASE_URL}/movies/${movieId}`, {
        method: "DELETE",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        }
    }).then(getResponseData);
}

function getResponseData(res) {
    if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
}
