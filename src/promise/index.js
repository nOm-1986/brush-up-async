/*
    Promise -> Utilizado para computación asincrona. Una promesa representa un valor que
    puede estar disponible AHORA, en el FUTURO, o NUNCA.
*/

const myPromise = new Promise((resolve, reject) => {
    resolve('Hey I am working!!!');
});

const cows = 10;

const countCows = new Promise((resolve, reject) => {
    if(cows >= 10) resolve(`We have enough cows on the farm, total ${cows}`);
    else reject(`Sorry, we don´t have enough cows right now`)
});


countCows
    .then( (result) => console.log(result) )
    .catch(error => console.log(error))
    .finally(() => console.log('Finally'));
