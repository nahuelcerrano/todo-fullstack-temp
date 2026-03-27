import "../../App.css"

function ClearButton({ label, style, onClick }) {
  return (
    <button
      className={style}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default ClearButton