import { useTodos } from "./hooks/useTodos"; 
import HeaderApp from "./components/layout/HeaderApp";
import ControlSection from "./components/sections/ControlSection";
import FilterSection from "./components/sections/FilterSection";
import TodoListSection from "./components/sections/TodoListSection";
import ErrorMessage from "./components/common/ErrorMessage";

import './App.css';


function App() {
    const {
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
    } = useTodos()

    return (

        <div className="app">
            <HeaderApp />

            <main className="app-main">

                <ControlSection addTodo={handleAddTodo} />

                <FilterSection
                    todos={todos}
                    activeCount={activeCount}
                    completedCount={completedCount}
                    filter={filter}
                    setFilter={setFilter}
                    handleClearCompleted={handleClearCompleted}
                    handleClearAll={handleClearAll}
                />

                <TodoListSection
                    filteredTodos={filteredTodos}
                    handleToggleComplete={handleToggleComplete}
                    handleDeleteTodo={handleDeleteTodo}
                    filter={filter}
                />
            </main>

            <ErrorMessage showError={showError} />
        </div>
    )
}
export default App