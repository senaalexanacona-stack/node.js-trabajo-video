import express from 'express';

const router = express.Router();

router.get('/usuarios', (req, res) => {
    res.json([
        { id: 1, nombre: 'sebastian' },
        { id: 2, nombre: 'carolina' },
        { id: 3, nombre: 'santiago' },
    ]);
});

export default router;