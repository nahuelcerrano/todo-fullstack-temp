import React from 'react'
import AddButton from '../common/AddButton'
import { useState } from 'react'


function ControlSection({ addTodo }) {
  const [inputValue, setInputValue] = useState('')

  const handleAddTodo = (e) => {
    e.preventDefault()

    addTodo(inputValue)

    if (inputValue.trim() !== "") {
      setInputValue("")
    }
  }

  const handleInputChange = (e) => {
    const newValue = e.target.value

    setInputValue(newValue)
  }

  return (
    <section>

      <form onSubmit={handleAddTodo} className="input-section">

        <div className="input-container">

          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="¿Que necesitas hacer hoy?"
            className="todo-input" />

          <AddButton />

        </div>
      </form>
      

    </section>
  )
}

export default ControlSection