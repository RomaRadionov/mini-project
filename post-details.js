let urlUserInfo = new URL(location.href);
let json = urlUserInfo.searchParams.get('data');
let userPost = JSON.parse(json);
console.log(userPost);


let urlGetComments = new URL(`https://jsonplaceholder.typicode.com/posts/${userPost}/comments`);
console.log(urlGetComments)
fetch(urlGetComments)
    .then(value => value.json())
    .then(comments => {
        console.log(comments);
    })