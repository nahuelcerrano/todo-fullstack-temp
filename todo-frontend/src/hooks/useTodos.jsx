import { useState, useEffect } from 'react';

// Guardamos la dirección de nuestro servidor en una variable para no repetirla
const API_URL = 'http://localhost:3000/api/todos';

export const useTodos = () => {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('all');
    const [showError, setShowError] = useState(false);

    // 1. CARGAR DATOS DESDE EL BACKEND AL INICIAR
    useEffect(() => {
        fetch(API_URL)
            .then(respuesta => respuesta.json())
            .then(datos => setTodos(datos))
            .catch(error => console.error('Error al cargar tareas:', error));
    }, []);

    // 2. Temporizador del error (este no cambia)
    useEffect(() => {
        if (showError) {
            const timer = setTimeout(() => setShowError(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [showError]);

    // 3. FUNCIONES CRUD CONECTADAS AL SERVIDOR

    // Agregar tarea (POST)
    const handleAddTodo = async (text) => {
        if (text.trim() === '') {
            setShowError(true);
            return;
        }
        
        try {
            // Le enviamos el texto al servidor
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text })
            });
            // El servidor nos devuelve la tarea ya armada con su ID
            const newTodo = await response.json();
            // La agregamos a la pantalla
            setTodos(prevTodos => [...prevTodos, newTodo]);
        } catch (error) {
            console.error('Error al guardar:', error);
        }
    };

    // Cambiar estado de completado (PUT)
    const handleToggleComplete = async (id) => {
        try {
            const response = await fetch(`${API_URL}/${id}`, { method: 'PUT' });
            const updatedTodo = await response.json();
            setTodos(prevTodos => prevTodos.map(todo => todo.id === id ? updatedTodo : todo));
        } catch (error) {
            console.error('Error al actualizar:', error);
        }
    };

    // Eliminar tarea (DELETE)
    const handleDeleteTodo = async (id) => {
        try {
            await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
            setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
        } catch (error) {
            console.error('Error al eliminar:', error);
        }
    };

    // Funciones extra (borran varias llamando a la función de eliminar)
    const handleClearCompleted = () => {
        const completed = todos.filter(t => t.completed);
        completed.forEach(t => handleDeleteTodo(t.id));
    };

    const handleClearAll = () => {
        todos.forEach(t => handleDeleteTodo(t.id));
    };

    // 4. Cálculos derivados (estos no cambian)
    const filteredTodos = todos.filter(todo => {
        if (filter === 'completed') return todo.completed;
        if (filter === 'active') return !todo.completed;
        return true;
    });

    const completedCount = todos.filter(todo => todo.completed).length;
    const activeCount = todos.length - completedCount;

    return {
        todos,
        filteredTodos,
        completedCount,
        activeCount,
        filter,
        setFilter,
        showError,
        handleAddTodo,
        handleToggleComplete,
        handleDeleteTodo,
        handleClearCompleted,
        handleClearAll
    };
};