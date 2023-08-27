class MainApi {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }
    _getResponse(res) {
        if (res.ok) {
            return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getInitialMovies() {
        return fetch(this._url, {
            headers: this._headers
        });
    }
}
export const api = new MainApi({
    url: "https://api.nomoreparties.co/beatfilm-movies",
    headers: { "Content-Type": "application/json" }
});
