import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import usersModel from '../models/users.js';

const sanitizeUser = (user) => ({
  _id: user._id,
  name: user.name,
  email: user.email,
  createdAt: user.createdAt,
  updatedAt: user.updatedAt
});

const usersController = {
  create: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new usersModel({
        name,
        email,
        password: hashedPassword
      });

      await newUser.save();

      res.status(201).json({
        message: 'Usuario creado correctamente',
        data: sanitizeUser(newUser)
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: 'Error al crear el usuario'
      });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await usersModel.findOne({ email });

      if (!user) {
        return res.status(404).json({
          message: 'Usuario no encontrado'
        });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(401).json({
          message: 'Contraseña incorrecta'
        });
      }

      const token = jwt.sign(
        {
          id: user._id,
          email: user.email
        },
        process.env.JWT_SECRET,
        {
          expiresIn: '1h'
        }
      );

      res.status(200).json({
        message: 'Login exitoso',
        token,
        user: sanitizeUser(user)
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: 'Error al iniciar sesión'
      });
    }
  },

  readAll: async (_req, res) => {
    try {
      const users = await usersModel.find();

      res.status(200).json({
        data: users.map(sanitizeUser)
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: 'Error al obtener los usuarios'
      });
    }
  },

  readById: async (req, res) => {
    try {
      const user = await usersModel.findById(req.params.id);

      if (!user) {
        return res.status(404).json({
          message: 'Usuario no encontrado'
        });
      }

      res.status(200).json({
        data: sanitizeUser(user)
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: 'Error al obtener el usuario'
      });
    }
  },

  update: async (req, res) => {
    try {
      const updatedUser = await usersModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true
      });

      if (!updatedUser) {
        return res.status(404).json({
          message: 'Usuario no encontrado'
        });
      }

      res.status(200).json({
        message: 'Usuario actualizado correctamente',
        data: sanitizeUser(updatedUser)
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: 'Error al actualizar el usuario'
      });
    }
  },

  delete: async (req, res) => {
    try {
      const deletedUser = await usersModel.findByIdAndDelete(req.params.id);

      if (!deletedUser) {
        return res.status(404).json({
          message: 'Usuario no encontrado'
        });
      }

      res.status(200).json({
        message: 'Usuario eliminado correctamente',
        data: sanitizeUser(deletedUser)
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: 'Error al eliminar el usuario'
      });
    }
  },

  profile: async (req, res) => {
    try {
      const user = await usersModel.findById(req.user.id);

      if (!user) {
        return res.status(404).json({
          message: 'Usuario no encontrado'
        });
      }

      res.status(200).json({
        message: 'Perfil del usuario autenticado',
        data: sanitizeUser(user)
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: 'Error al obtener el perfil'
      });
    }
  }
};

export default usersController;
