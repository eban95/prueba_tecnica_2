# 🚀 Prueba Técnica #1 - Autenticación de Usuarios

## 📌 Descripción

Este proyecto consiste en una aplicación fullstack que permite la gestión de usuarios mediante autenticación con JSON Web Token (JWT).

La aplicación incluye:

- Registro de usuarios
- Inicio de sesión
- Visualización del usuario autenticado (Dashboard)
- Listado de usuarios
- Eliminación de usuarios

---

## 🛠 Tecnologías utilizadas

### 🔧 Backend
- Node.js
- Express
- MongoDB Atlas
- Mongoose
- JSON Web Token (JWT)
- Bcrypt

### 🖥 Frontend
- Angular
- TypeScript

---

## 📁 Estructura del proyecto

backend/
 ├── src/
 │    ├── controllers/
 │    ├── models/
 │    ├── routes/
 │    ├── config/
 │    └── server.js

front/
 ├── src/
 │    ├── app/
 │    │    ├── components/
 │    │    │    ├── pages/
 │    │    │    │    ├── login/
 │    │    │    │    ├── register/
 │    │    │    │    ├── dashboard/
 │    │    │    │    ├── users/
 │    │    │    └── shared/

---

## 🚀 Instalación y ejecución

### 🔧 Backend

1. Ir a la carpeta backend:
cd backend

2. Instalar dependencias:
npm install

3. Crear archivo .env con:
PORT=3000
JWT_SECRET=tu_clave_secreta
MONGO_URI=tu_uri_de_mongodb_atlas

4. Ejecutar servidor:
npm run dev

Servidor disponible en:
http://localhost:3000

---

### 🖥 Frontend

1. Ir a la carpeta frontend:
cd front

2. Instalar dependencias:
npm install

3. Ejecutar aplicación:
npm start

Aplicación disponible en:
http://localhost:4200

---

## 🔐 Autenticación

El sistema utiliza JWT para la autenticación:

- El usuario inicia sesión
- El backend genera un token
- El token se guarda en localStorage
- El frontend usa el usuario guardado para mostrar información en el dashboard

---

## 📊 Funcionalidades implementadas

- ✔ Crear usuario (registro)
- ✔ Iniciar sesión
- ✔ Visualizar usuario autenticado (Dashboard)
- ✔ Listar todos los usuarios
- ✔ Eliminar usuarios

---

## 🧠 Decisiones técnicas

- Se utilizó MongoDB Atlas para la base de datos en la nube
- Se implementó bcrypt para el cifrado de contraseñas
- Se usó JWT para autenticación
- Se utilizó localStorage para mantener la sesión en el frontend
- Se estructuró el backend siguiendo el patrón MVC
- Se utilizaron componentes standalone en Angular para simplificar la estructura

---

## 👨‍💻 Autor

Desarrollado por: Esteban Linares