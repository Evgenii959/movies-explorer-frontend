# movies-explorer-frontend
Сайт

https://frontend-evgeny.nomoredomains.sbs/

Сделал верстку

Макет можно открыть по ссылке https://www.figma.com/file/7El8uHYPQ3DW1UUdezeTt3/dark-1?type=design&node-id=932%3A4503&mode=design&t=PZ2e7mNN0LGZWEEa-1

Сделал функциональность

https://github.com/Evgenii959/movies-explorer-frontend/pull/2

Реализовали функциональность сайта. Сделали асинхронные GET- и POST-запросы к API. Написали все запросы к нашему и стороннему API. Защитили роуты /saved-movies, /profile и /movies авторизацией. Для хранения данных о пользователе использовали глобальную стейт-переменную currentUser, созданную с помощью createContext. В компонент App внедрили контекст через CurrentUserContext.Provider. JWT-токен сохранили в localStorage. Сделали так, чтобы ошибка от API была обработана и пользователь видел сообщение об ошибке. Настроили прелоадер так, чтобы он крутился, пока от сервера идёт ответ. Кликом по карточке переводим пользователя на ютюб-трейлер фильма.
