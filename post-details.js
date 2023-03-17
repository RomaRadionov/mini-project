let urlUserInfo = new URL(location.href);
let json = urlUserInfo.searchParams.get('data');
let userPost = JSON.parse(json);

const blockOfPost = document.querySelector('.content');
let urlGetComments = new URL(`https://jsonplaceholder.typicode.com/posts/${userPost}/comments`);
fetch(urlGetComments)
    .then(value => value.json())
    .then(comments => {
        for (const key in comments) {
            if (typeof comments[key] === 'object') {
                createElem(comments[key]);
            }
        }
    })
function createElem(obj) {
    const blockTitle = document.createElement('div');
    blockTitle.classList.add('flex');
    for (const key in obj) {
            blockOfPost.appendChild(blockTitle);
            blockTitle.innerHTML += `<p class="post">${key}: ${obj[key]}</p>`;
    }
}