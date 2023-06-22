/*En este desafío debes ejecutar el resultado de 3 tareas asíncronas en 
orden y retornar el resultado en un array.

Para solucionarlo vas a encontrar una función llamada runCode que no recibe parámetros 
de entrada y el archivo tasks.js con las funciones que tienes que ejecutar, dentro del 
cuerpo de la función runCode debes escribir tu solución.

Ejemplo:

Input:
runCode()
.then(response => console.log(response));

Output:
["Task 1", "Tasks 2", "Task 3"]

*/

function doTask1() { 
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Task 1'), 2000)
            : reject(new Error('Oops'));
    }); 
}
function doTask2() { 
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Task 2'), 2000)
            : reject(new Error('Oops'));
    }); 
}

function doTask3() { 
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Task 3'), 2000)
            : reject(new Error('Oops'));
    }); 
}

async function runCode() {
  // Tu código aquí 👈
  const r1 = await doTask1();
  const r2 = await doTask2();
  const r3 = await doTask3();
  console.log(r1, r2, r3)
}
runCode();


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

