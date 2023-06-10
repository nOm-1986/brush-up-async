/*La declaración de función async define una función asíncrona,
la cual devuelve un objeto AsyncFunction
*/

const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Wuiii'), 2000)
            : reject(new Error('Oops'));
    });
}

const anotherFunction = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('Hello');
}

console.log('Before');
anotherFunction();
console.log('After');