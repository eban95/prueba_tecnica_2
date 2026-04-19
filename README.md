# 🚀 Prueba Técnica #2 – MEAN Stack

## 📌 Descripción del Proyecto

Este proyecto consiste en el desarrollo de una aplicación web utilizando el stack MEAN (MongoDB, Express, Angular, Node.js), que permite la gestión de empleados y departamentos mediante operaciones CRUD (Crear, Leer, Actualizar y Eliminar).

La aplicación incluye:

* Gestión completa de empleados
* Gestión completa de departamentos
* Relación entre empleados y departamentos
* Visualización de empleados agrupados por departamento

---

## 🧠 Funcionalidades

### 🔹 Empleados

* Crear empleados
* Listar empleados
* Editar empleados
* Eliminar empleados

### 🔹 Departamentos

* Crear departamentos
* Listar departamentos
* Editar departamentos
* Eliminar departamentos

### 🔹 Relación

* Visualización de los empleados pertenecientes a cada departamento
* Asociación mediante `codigo_departamento`

---

## 🛠️ Tecnologías Utilizadas

### Backend

* Node.js
* Express.js
* MongoDB (Mongo Atlas)
* Mongoose

### Frontend

* Angular (Standalone Components)
* HTML
* CSS

---

## 🗂️ Estructura del Proyecto

```
backend/
  ├── models/
  ├── controllers/
  ├── routers/
  └── server.js

frontend/
  ├── components/
  │   ├── empleados/
  │   ├── departamentos/
  │   └── shared/
  └── app.routes.ts
```

---

## ⚙️ Instalación y Ejecución

### 🔹 1. Clonar repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd prueba-tecnica
```

---

### 🔹 2. Backend

```bash
cd backend
npm install
nod src/server.js
```

El backend correrá en:

```
http://localhost:3000
```

---

### 🔹 3. Frontend

```bash
cd frontend
npm install
npm start
```

El frontend correrá en:

```
http://localhost:4200
```

---

## 🔗 Endpoints principales

### Empleados

* `GET /empleados`
* `POST /empleados`
* `PUT /empleados/:id`
* `DELETE /empleados/:id`

### Departamentos

* `GET /departamentos`
* `POST /departamentos`
* `PUT /departamentos/:id`
* `DELETE /departamentos/:id`

---

## 🧩 Decisiones Técnicas

* Se utilizó `fetch` para la comunicación con el backend por simplicidad
* Se implementaron componentes standalone en Angular para mayor modularidad
* La relación entre empleados y departamentos se resolvió desde el frontend mediante filtrado de datos
* Se utilizó MongoDB Atlas como base de datos en la nube

---

## 🎯 Cumplimiento de Requisitos

✔ CRUD de empleados
✔ CRUD de departamentos
✔ Uso de MongoDB
✔ Interfaz en Angular
✔ Relación empleados por departamento
✔ Estructura organizada

---

## 📌 Notas Finales

El proyecto cumple con todos los requerimientos solicitados en la prueba técnica, incluyendo lógica, estructura, funcionalidad y presentación.

---

## 👨‍💻 Autor

Desarrollado por: Esteban linares

---
