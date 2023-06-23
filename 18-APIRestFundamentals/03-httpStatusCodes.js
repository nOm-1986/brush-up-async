/**
 * Qué son los HTTP Status Codes.
 * Nos ayudan a reacción a las respuestas de la API.
 * 
 * 200 - 2xx: Indica que va todo bn. Ej: 202 es un poco más específico.
 * 
 * 300 - 3xx: Redirect, El backend hace un redirect. Ej: 307: el redirect es temporal.
 * 308: Siempre casi en un 99%, te voy a redirigir a esta ruta.
 * 
 * 400 - 4xx: Un error de front. Ej: 400 un error de tipo.
 * 401: Que la ruta que tratamos de acceder no funciona tal cual y necesita darle un método de autenticación.
 * 402: Puede significar que se necesita pagar para poder entrar en esa ruta.
 * 404: Not found, lo que solicitamos no existe.
 * 
 * 500 - 5xx: Error del servidor. No sabemos si esta bn o mal el frontend, pero el backend falló.
 * 
 */