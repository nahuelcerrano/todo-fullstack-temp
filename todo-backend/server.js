const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Configuración básica
app.use(cors()); // Permite que React se conecte sin bloqueos de seguridad
app.use(express.json()); // Permite que el servidor entienda datos en formato JSON

// Nuestra "Base de datos" temporal en memoria
let todos = [];

// ==========================================
// RUTAS (ENDPOINTS) DE NUESTRA API
// ==========================================

// 1. OBTENER TODAS LAS TAREAS (GET)
app.get('/api/todos', (req, res) => {
    res.json(todos);
});

// 2. CREAR UNA NUEVA TAREA (POST)
app.post('/api/todos', (req, res) => {
    const newTodo = {
        id: Date.now(),
        text: req.body.text,
        completed: false
    };
    todos.push(newTodo);
    // Respondemos con la tarea recién creada
    res.status(201).json(newTodo);
});

// 3. ACTUALIZAR UNA TAREA (PUT) - Para marcarla completada
app.put('/api/todos/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    const todo = todos.find(t => t.id === todoId);
    
    if (todo) {
        // Invertimos el estado de completado
        todo.completed = !todo.completed;
        res.json(todo);
    } else {
        res.status(404).json({ error: 'Tarea no encontrada' });
    }
});

// 4. ELIMINAR UNA TAREA (DELETE)
app.delete('/api/todos/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    todos = todos.filter(t => t.id !== todoId);
    res.json({ message: 'Tarea eliminada exitosamente' });
});

// ==========================================
// INICIAR EL SERVIDOR
// ==========================================
app.listen(PORT, () => {
    console.log(`🚀 Servidor backend corriendo en http://localhost:${PORT}`);
});