const BASE_URL = "http://localhost:3000";

 export function register(name, email, password) {
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

export function login(email, password) {
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

export function editUser({ email, password }) {
           return fetch(`${BASE_URL}/users/me`, {
               method: "PATCH",
               credentials: "include",
               headers: {
                   "Content-Type": "application/json",
                   Accept: "application/json"
               },
               body: JSON.stringify({ email, password })
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

export function addSavedMovies({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movield,
    nameRU,
    nameEN
}) {
    return fetch(`${this._url}/saved-movies`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            country: country,
            director: director,
            duration: duration,
            year: year,
            description: description,
            image: image,
            trailerLink: trailerLink,
            thumbnail: thumbnail,
            movield: movield,
            nameRU: nameRU,
            nameEN: nameEN
        })
    }).then(getResponseData);
}

function getResponseData(res) {
    if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
}
