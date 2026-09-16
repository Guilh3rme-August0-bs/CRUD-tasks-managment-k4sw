import { Router } from 'express';
import { atualizarTarefa, criarTarefa } from '../controllers/taskController.js';

const router = Router();

router.post('/tasks', criarTarefa);
router.put('/tasks/:id', atualizarTarefa)

export default router;
