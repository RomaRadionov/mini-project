// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id, name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання, при кліку на яку відбувається перехід на сторінку user-details.html,
// котра має детальну інформацію про об'єкт на який клікнули
//
//
// На сторінці user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для отримання постів використайте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Кожному посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.js.html,
// котра має детальну інфу про поточний пост.
//
// На сторінці post-details.js.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули.
// 8 Нижче інформацію про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
// Стилізація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/посилання розташувати під інформацією про user.
// user-details.html - блок з інфою про user зверху сторінки. Кнопка нижче, на 90% ширини сторінки, по центру.
// блоки з короткою іфною про post - в ряд по 5 .
// post-details.js.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
// Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і т.д.)

let urlGetUsers = new URL('https://jsonplaceholder.typicode.com/users');
fetch(urlGetUsers)
    .then(value => value.json())
    .then(users => {
        let ul = document.getElementById('listOfUsers');
        for (const user of users) {
            let li = document.createElement('li');
            let btnInfoUser = document.createElement('a');

            btnInfoUser.href = 'user-details.html?data=' + JSON.stringify(user);
            btnInfoUser.innerText = 'More...';
            btnInfoUser.id = `${user.id}`;
            btnInfoUser.target = '_blank';

            li.innerText = `${user.id}. ${user.name} `;
            li.appendChild(btnInfoUser);
            ul.appendChild(li);
        }
    })