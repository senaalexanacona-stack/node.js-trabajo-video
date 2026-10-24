const express = require('express');

const server = express();

const port = 3000;

server.get('/', (req, res) => {
    res.send('¡hola, mundo!');
});

server.get('/usuarios', (req, res) => {
    res.json([
        { id: 1, nombre: 'sebastian'},
        { id: 2, nombre: 'carolina'},
        { id: 3, nombre: 'santiago'},
    ]);
})

server.get("/acerca",(req, res) => {
    res.send("esta es la pagina de acerca de...");
})

server.get("/mesadeayuda",(req, res) => {
    res.sendFile(__dirname + "/mesadeayuda.html.html");
})

server.listen(port, () => {
    console.log('El servidor esta corriendo en el puerto http://localhost:', port)
})