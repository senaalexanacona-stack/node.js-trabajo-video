import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = express.Router();

router.get('/', (req, res) => {
    res.send('¡hola, mundo!');
});

router.get("/acerca", (req, res) => {
    res.send("esta es la pagina de acerca de...");
});

router.get("/mesadeayuda", (req, res) => {
    res.sendFile(join(__dirname, '../mesadeayuda.html'));
});

export default router;