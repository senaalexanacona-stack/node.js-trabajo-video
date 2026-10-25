import express from 'express';
import usuarioRoutes from './usuario.routes.js'; 
import homeRoutes from './home.routes.js';

const router = express.Router();

router.use("/", usuarioRoutes);
router.use("/", homeRoutes);

export default router;