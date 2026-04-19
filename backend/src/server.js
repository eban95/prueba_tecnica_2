import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import usersRouter from './routers/users.js';
import empleadoRouter from './routers/empleado.js';
import departamentoRouter from './routers/departamento.js'; 

const server = express();
const PORT = process.env.PORT || 3000;

connectDB();

server.use(cors());
server.use(express.json());

server.use('/users', usersRouter);
server.use('/empleados', empleadoRouter);
server.use('/departamentos', departamentoRouter);
server.get('/', (req, res) => {
res.status(200).json({ message: 'Servidor funcionando correctamente' });
});

server.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});
