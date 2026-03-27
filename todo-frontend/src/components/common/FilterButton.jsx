import "../../App.css";

function FilterButton({ label, value, currentFilter, setFilter }) {
  return (
    <button className={`filter-btn ${currentFilter === value ? 'active' : ''}`}
      onClick={() => {
        console.log(`Filtro cambiado a: ${value}`)
        setFilter(value)
      }}
    >
      {label}
    </button>
  )
}

export default FilterButton;