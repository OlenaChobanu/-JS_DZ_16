// Вверху страницы находится инпут и кнопка. 
// Пользователь может ввести туда username любого пользователя гитхаб. 
// Когда пользователь ввел логин, он может нажать на кнопку "Найти". 
// В этот момент приложение должно отправить запрос на API Github 
// и получить информацию о пользователе.

// Данные для пользователя берем из запроса https://api.github.com/users/{{login}}, 
// где логин - это логин выбраного пользователя

// Н-р для пользователя bardankl url будет https://api.github.com/users/bardankl

// После получения данных нужно показать:
// 1. аватар пользователя (свойство avatar_url), 
// 2. количество репозиториев (свойство public_repos), 
// 3. количество фоловеров (свойство followers),
// 4. количество наблюдаемых (свойство following).

// Если такого юзернейма не существует гитхаб вернет ошибку (404). 
// Попробуйте обработать ее в .catch


class GitHub {
    #baseUrl = 'https://api.github.com/users/';
    getUser(userLogin) {
        return fetch(this.#baseUrl + userLogin).then( result => {
            if(result.status === 200) {
                return result.json();
            }
            return Promise.reject(result.status);
        });
    }
}