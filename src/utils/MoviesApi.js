export const BASE_URL = "http://frontend-evgeny.nomoredomains.sbs";

export function register(name, email, password) {
    return fetch(`${BASE_URL}/signup`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password })
    }).then(getResponseData);
}

export function login(email, password) {
           return fetch(`${BASE_URL}/signin`, {
               method: "POST",
               credentials: "include",
               headers: { "Content-Type": "application/json" },
               body: JSON.stringify({ email, password })
           }).then(getResponseData);
       }

function getResponseData(res) {
    if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
}
