import FilterButton from "../common/FilterButton"
import ClearButton from "../common/ClearButton"
import StatsTodo from "../layout/StatsTodo"


function FilterSection({
    todos,
    activeCount,
    completedCount,
    filter,
    setFilter,
    handleClearCompleted,
    handleClearAll
}) {
    return (
        <section className="controls-section">
            <StatsTodo
                stats={[
                    { value: todos.length, label: "Total" },
                    { value: activeCount, label: "Pendientes" },
                    { value: completedCount, label: "Completadas" }
                ]}
            />

            <div className="filters">

                <FilterButton
                    label="Todas"
                    value="all"
                    currentFilter={filter}
                    setFilter={setFilter}
                />

                <FilterButton
                    label="Pendientes"
                    value="active"
                    currentFilter={filter}
                    setFilter={setFilter}
                />


                <FilterButton
                    label="Completadas"
                    value="completed"
                    currentFilter={filter}
                    setFilter={setFilter}
                />
            </div>


            <div className="clear-actions">
                {completedCount > 0 && (
                    <ClearButton
                        label="Limpiar completadas"
                        style="clear-completed"
                        onClick={handleClearCompleted}
                    />
                )}


                {todos.length > 0 && (
                    <ClearButton
                        label="Limpiar todo"
                        style="clear-all"
                        onClick={handleClearAll}
                    />
                )}
            </div>
        </section>
    )
}

export default FilterSection
