/*
En este desafío vas a conectarte a una API que no existe, por ende debes capturar el error haciendo uso de try/catch y lanzar un error con el mensaje API Not Found.

Para lanzar el error debes usar el siguiente bloque de código:

throw new Error('API Not Found');

Para solucionarlo vas a encontrar una función llamada runCode que no recibe parámetros de entrada, dentro del cuerpo de la función runCode debes escribir tu solución.

Ejemplo:

Input:
await runCode();
*/
import fetch from "node-fetch";

const playground = async () => {
    const url = 'https://domain-api-com';
    try {
        const res = await fetch(url);
        const jso = await res.json();
        return jso;
    } catch {
        throw new Error('API Not Found');
    }
}

playground();