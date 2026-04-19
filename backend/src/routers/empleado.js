import express from 'express';
import empleadoController from '../controllers/empleado.js';

const router = express.Router();


router.post('/', empleadoController.create);
router.get('/', empleadoController.readAll);
router.get('/:id', empleadoController.readById);
router.put('/:id', empleadoController.update);
router.delete('/:id', empleadoController.delete);

export default router;