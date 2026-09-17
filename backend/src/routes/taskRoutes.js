import { Router } from 'express';
import { atualizarTarefa, criarTarefa, excluirTarefa, verTarefas } from '../controllers/taskController.js';

const router = Router();

router.post('/tasks', criarTarefa);
router.put('/tasks/:id', atualizarTarefa);
router.get('/tasks', verTarefas);
router.delete('/tasks/:id', excluirTarefa)

export default router;
