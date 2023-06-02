
const suma = (num1, num2) => {
    return num1 + num2;
}

function calculator(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calculator(33,23,suma));

//SetTimeOut ya de por si utiliza un callback.
setTimeout(() => {
    console.log('Hola JavaScript');
}, 2000);

function greetting(name,apellido){
    console.log(`Hola ${name} ${apellido}`);
}

//Parametros => 1 - Función, 2-El tiempo, 3- Parametros
setTimeout(greetting, 2000, 'Fabián','Beltrán');


