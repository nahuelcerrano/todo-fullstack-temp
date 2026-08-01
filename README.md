# 📝 Todo Fullstack App

Una aplicación de gestión de tareas (Todo App) completa y modular. Este proyecto está dividido en dos partes principales: un cliente interactivo (Frontend) y una API (Backend) de soporte.

---

## 🛠️ Stack Tecnológico

| Entorno | Tecnologías y Librerías Principales |
| :--- | :--- |
| **🖥️ Frontend** | React (v19), Vite + SWC, ESLint |
| **⚙️ Backend** | Express.js (v5), PostgreSQL (`pg`), CORS, dotenv |

---

## 🚀 Características Destacadas

### 🎨 Frontend (Interfaz de Usuario)
El cliente está diseñado pensando en el rendimiento y la escalabilidad:
* **Tecnología de Vanguardia**: Construido con **React 19** y empaquetado con **Vite** utilizando el plugin **SWC** para tiempos de compilación ultrarrápidos y recarga en caliente.
* **Arquitectura Modular**: Interfaz estructurada en componentes de uso común (`AddButton.jsx`, `ClearButton.jsx`), de estructura (`HeaderApp.jsx`) y secciones complejas (`TodoListSection.jsx`).
* **Lógica Limpia**: Las llamadas a la API y la lógica de negocio están aisladas en Custom Hooks (como `useTodos.jsx`).
* **Soporte de Temas**: Incluye gestión de estado global para modo claro/oscuro mediante la Context API de React (`ThemeContext.jsx`).
* **Estándares de Calidad**: Asegura un código limpio y sin errores gracias a su integración estricta con **ESLint**.

### ⚙️ Backend (Servidor y API)
El servidor está preparado para ser robusto, seguro y fácil de levantar:
* **Framework Moderno**: API RESTful construida sobre **Express.js v5**.
* **Base de Datos Relacional**: Conexión nativa e integración con **PostgreSQL** a través del controlador `pg`.
* **Configuración Segura**: Manejo seguro de variables de entorno mediante `dotenv` y control de acceso configurado con `cors`.
* **Automatización de BD**: Cuenta con un script propio (`db:setup`) que automatiza la creación e inicialización de las tablas de la base de datos sin fricciones.

---

## 📁 Estructura del Proyecto

El repositorio mantiene una estricta separación de responsabilidades entre el cliente y el servidor:

```text
📦 todo-fullstack-temp
 ┣ 📂 todo-backend/      # API en Express y conexión a PostgreSQL
 ┃ ┣ 📜 server.js        # Entry point del servidor
 ┃ ┣ 📜 setup-db.js      # Script de inicialización de la BD
 ┃ ┗ 📜 package.json     # Dependencias y scripts del backend
 ┗ 📂 todo-frontend/     # Cliente en React 19 + Vite
   ┣ 📂 src/
   ┃ ┣ 📂 components/    # Componentes UI (common, context, layout, sections)
   ┃ ┣ 📂 hooks/         # Custom hooks para la lógica de la app
   ┃ ┣ 📜 App.jsx        # Componente raíz
   ┃ ┗ 📜 main.jsx       # Entry point de React
   ┣ 📜 vite.config.js   # Configuración de Vite y SWC
   ┗ 📜 eslint.config.js # Reglas de linting
```
---

## 💻 Instalación y Ejecución Local

Para correr este proyecto en tu máquina, necesitarás **Node.js** y acceso a una base de datos **PostgreSQL**.

### 1. Configuración del Backend

Abre una terminal y navega a la carpeta del servidor. *(Asegúrate de configurar tus variables de entorno necesarias para la conexión a PostgreSQL)*.

```bash
cd todo-backend
npm install
npm run db:setup  # Inicializa las tablas de la base de datos
npm start         # Levanta el servidor Node/Express

```

### 2. Configuración del Frontend

Abre una nueva pestaña en tu terminal y navega a la carpeta del cliente:

```bash
cd todo-frontend
npm install
npm run dev       # Inicia el entorno de desarrollo de Vite

```
