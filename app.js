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

const btnE = document.querySelector('#btn');
const inpE = document.querySelector('#inp');
const resE = document.querySelector('#result-container');
const errE = document.querySelector('#error-container');
inpE.focus();

btnE.addEventListener('click', onFind);

const git = new GitHub(); 

const ERROR_MSG = {
    404: 'Error 404: user not found',
    500: 'Error 500: server is unavailible',
}

function onFind() {
    git
    .getUser(inpE.value)
    .then( u => {
        // console.log(u);
        renderData(u);
    })
    .catch( e => {
        renderError(e);
    });
}
const liNameE = createElement('li');
liNameE.textContent = name;
addElement(liNameE, ulNameContainerE);

function createElement(tag) {
    return document.createElement(tag);
}

function addElement(element, container) {
    return container.append(element);
}

function renderData(data) {
    
    resE.innerHTML = `
        <li>GitHub user\`s login: ${inpE.value}.</li>
        <li>avatar_url: ${data.avatar_url}</li>
        <li>public_repos: ${data.public_repos}</li>
        <li>followers: ${data.followers}</li>
        <li>following: ${data.following}</li>
        `;
        clearInputValue(inpE);
        clearContainer(errE);
}

function renderError(errorCode) {
    errE.innerHTML = ERROR_MSG[errorCode];
    clearInputValue(inpE);
    clearContainer(resE);
}

function clearInputValue(el) {
    el.value = ''
}

function clearContainer(el) {
    el.innerHTML = '';
}