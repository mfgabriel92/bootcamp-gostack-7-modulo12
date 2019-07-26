import React, { useState } from 'react'

function TechsList() {
  const [techs, setTechs] = useState([])
  const [newTech, setNewTech] = useState('')

  function handleAddTech() {
    setTechs([...techs, newTech])
    setNewTech('')
  }

  return (
    <div>
      <form data-testid="tech-form" onSubmit={handleAddTech}>
        <label htmlFor="tech">Tech</label>
        <input id="tech" type="text" value={newTech} onChange={e => setNewTech(e.target.value)} />
        <ul data-testid="techs-list">
          {techs.map(tech => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <button onClick={handleAddTech}>Add</button>
      </form>
    </div>
  )
}

export default TechsList
