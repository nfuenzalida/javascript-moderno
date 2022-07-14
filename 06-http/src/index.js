const jokeUrl = 'https://api.chucknorris.io/jokes/random';

// fetch(jokeUrl).then(resp => {
//     resp.json().then( ({value}) => {
//         console.log(value);
//     });
// });

fetch(jokeUrl)
    .then(resp => resp.json())
    .then(({id, value}) => {
        console.log(id,value);
    });
