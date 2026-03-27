import React from 'react';


function TodoListSection({ 
    filteredTodos, 
    handleToggleComplete, 
    handleDeleteTodo, 
    filter 
}) {
    return (
        <section className="todo-list-section">
            {filteredTodos.length > 0 ? (
                <div className="todo-list">
                    {filteredTodos.map(todo => (
                        <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                            <div className="todo-content">
                                <div className="checkbox-container">
                                    <input
                                        type="checkbox"
                                        checked={todo.completed}
                                        onChange={() => handleToggleComplete(todo.id)}
                                        className="todo-checkbox" 
                                    />
                                    <span className="checkmark"></span>
                                </div>
                                <span className="todo-text">{todo.text}</span>
                            </div>

                            <button
                                onClick={() => handleDeleteTodo(todo.id)}
                                className="delete-button"
                                aria-label="Eliminar tarea"
                            >
                                <span className="trash-icon">🗑️</span>
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="empty-state">
                    <div className="empty-icon">📝</div>
                    <h3>No hay tareas</h3>
                    <p>
                        {filter === 'completed'
                            ? 'No hay tareas completadas'
                            : filter === 'active'
                                ? '¡Genial! No hay tareas pendientes'
                                : 'Comienza agregando una nueva tarea'}
                    </p>
                </div>
            )}
        </section>
    );
}

export default TodoListSection;