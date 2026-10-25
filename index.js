import server from "./app/server.js";

server.listen(server.get("port"), () => {
    console.log('El servidor esta corriendo en el puerto http://localhost:', server.get("port"));
})