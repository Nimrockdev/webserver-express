const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    let salida = {
        nombre: 'jsg8405',
        edad: 100,
        url: req.url
    }
    res.write(JSON.stringify(salida));
    /* res.write('Hola Webserver'); */
    res.end();
}).listen(8080);

console.log('Escuchando el puerto 8080');