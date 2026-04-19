import express from 'express';
import departamentoController from '../controllers/departamento.js';

const router = express.Router();

router.post('/', departamentoController.create);
router.get('/', departamentoController.readAll);
router.get('/:id', departamentoController.readById);
router.put('/:id', departamentoController.update);
router.delete('/:id', departamentoController.delete);

export default router;