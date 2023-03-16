let urlUserInfo = new URL(location.href);
let json = urlUserInfo.searchParams.get('data');
let user = JSON.parse(json);
console.log(user);

const btnPost = document.querySelector('.btnPost');
const id = document.querySelector('.id').innerText = `id: ${user.id}`;
const name = document.querySelector('.name').innerText = `name: ${user.name}`;
const username = document.querySelector('.username').innerText = `username: ${user.username}`;
const email = document.querySelector('.email').innerText = `email: ${user.email}`;
const phone = document.querySelector('.phone').innerText = `phone: ${user.phone}`;
const website = document.querySelector('.website').innerText = `website: ${user.website}`;

const city = document.querySelector('.city').innerText = `city: ${user.address.city}`;
const street = document.querySelector('.street').innerText = `street: ${user.street}`;
const suite = document.querySelector('.suite').innerText = `suite: ${user.address.suite}`;
const zipcode = document.querySelector('.zipcode').innerText = `zipcode: ${user.address.zipcode}`;
const lat = document.querySelector('.lat').innerText = `lat: ${user.address.geo.lat}`;
const lng = document.querySelector('.lng').innerText = `lat: ${user.address.geo.lng}`;

const companyName = document.querySelector('.companyName').innerText = `name: ${user.company.name}`;
const catchPhrase = document.querySelector('.catchPhrase').innerText = `catchPhrase: ${user.company.catchPhrase}`;
const bs = document.querySelector('.bs').innerText = `bs: ${user.company.bs}`;


// Воно працює але з косяком в об'єкта user є два поля з назвою name, і воно заміняє ім'я користувача на ім'я компанії
// const setText = (selector, text) => {
//     document.querySelector(selector).innerText = text;
// };
//
// const loopProperties = (obj) => {
//     for (const property in obj) {
//         if (obj.hasOwnProperty(property)) {
//             const value = obj[property];
//             const propertySelector = `.${property}`;
//
//             if (typeof value === 'object') {
//                 loopProperties(value, propertySelector);
//             } else {
//                 setText(propertySelector, `${property}: ${value}`);
//             }
//         }
//     }
// };
//
// loopProperties(user);


// Написана нижче функція:
// 1. Проходиться по ключах об'єкта і створює div з назвою ключа
// 2. Якщо ключ є об'єктом тоді функція запускає сама себе(рекурсія) і повторяє перший пункт
// 3. Якщо ключ вже існує створюється змінна count яка дорівнює 1, і додається до ключа window[key + count]
// 4. Все додається(append) в блок
// let count = 1;
// function createElem(obj) {
//     for (const key in obj) {
//         if (typeof obj[key] !== 'object') {
//             if (window[key] in window) {
//                 window[key] = document.createElement('div');
//                 window[key].innerText = `${key}: ${obj[key]}`;
//                 block.append(window[key]);
//             } else {
//                 let count = 1;
//                 window[key + count] = document.createElement('div');
//                 window[key + count].innerText = `${key}: ${obj[key]}`;
//                 block.append(window[key + count]);
//                 count++;
//                 console.log(`${key}. ${obj[key]}`)
//             }
//         } else {
//             createElem(obj[key]);
//         }
//     }
//
// }
// function createElem(obj) {
//     for (const key in obj) {
//         if (typeof obj[key] !== 'object') {
//             if (window[key] in window) {
//                 block.appendChild(document.createElement('div')).className = `${key}`;
//                 document.querySelector(`div.${key}`).textContent = `${key}: ${obj[key]}`;
//             } else {
//                 block.appendChild(document.createElement('div')).className = `${key + count}`;
//                 document.querySelector(`div.${key + count}`).textContent = `${key}: ${obj[key]}`;
//                 count++;
//                 console.log(`${key}. ${obj[key]}`)
//             }
//         } else {
//             createElem(obj[key]);
//         }
//     }
// }
//
// createElem(user);
//
// const id = document.querySelector('.id');
// const idNum = parseInt(id.textContent.split(':')[1].trim());
// console.log(idNum);
//

const blockOfPost = document.querySelector('.blockOfPost');

function createElem(item) {
    const btnShowComment = document.createElement('a');
    const idUser = document.createElement('div');
    const blockTitle = document.createElement('div');
    const titleUser = document.createElement('div');

    blockTitle.classList.add('flex');
    btnShowComment.href = 'post-details.html?data=' + JSON.stringify(item.id);
    btnShowComment.id = `${item.id}`
    btnShowComment.innerText = 'Деталі';
    btnShowComment.target = '_blank';
    titleUser.innerText = `title: ${item.title}`;
    idUser.innerText = `id: ${item.id}`;
    blockTitle.append(idUser, titleUser, btnShowComment)
    blockOfPost.appendChild(blockTitle);
}

function showPostsTitle() {
    let urlGetUsersPosts = new URL(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`);
    fetch(urlGetUsersPosts)
        .then(value => value.json())
        .then(userPost => {
            blockOfPost.innerHTML = '';
            for (const item of userPost) {
                createElem(item);
            }
        })
}

btnPost.addEventListener('click', showPostsTitle);