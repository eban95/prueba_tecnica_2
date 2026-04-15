import { Router } from 'express';
import usersController from '../controllers/users.js';
import authMiddleware from '../middleware/auth.js';

const usersRouter = Router();

usersRouter.post('/', usersController.create);
usersRouter.post('/login', usersController.login);
usersRouter.get('/', usersController.readAll);
usersRouter.get('/profile', authMiddleware, usersController.profile);
usersRouter.get('/:id', usersController.readById);
usersRouter.put('/:id', usersController.update);
usersRouter.delete('/:id', usersController.delete);

export default usersRouter;
