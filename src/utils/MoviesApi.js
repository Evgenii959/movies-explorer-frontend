export const BASE_URL = "https://api.nomoreparties.co/beatfilm-movies";

export function getMovies() {
    return fetch(`${BASE_URL}`, {
        headers: { "Content-Type": "application/json" }
    }).then(getResponseData);
}

function getResponseData(res) {
    if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
}
