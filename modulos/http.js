const http = require('http');

http.createServer(router).listen(3000);
    
function router(req, res) {
    console.log('Nueva petición!');
    console.log(req.url);

    switch (req.url) {
        case '/hola':
            let saludo = hola();
            res.write(saludo);
            res.end();
            break;

        default:
            res.write('Error 404: No se lo que quieres');
            res.end();
    }

    // escribir cabecera
    // res.writeHead(201, { 'Content-Type': 'text/plain' });

    // escribir respuesta al usuario
    // res.write('Hola, ya se usar http de NodeJS');

    // res.end();
}

function hola() {
    return 'Hola, ¿Qué tal?';
}

console.log('Escuchando http en el puerto 3000');