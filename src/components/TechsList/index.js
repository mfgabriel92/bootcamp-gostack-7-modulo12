import React, { useState } from 'react'

function TechsList() {
  const [techs, setTechs] = useState([])

  function handleAddTech() {
    setTechs([...techs, 'Node.js'])
  }

  return (
    <div>
      <ul data-testid="techs-list">
        {techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <button onClick={handleAddTech}>Add</button>
    </div>
  )
}

export default TechsList
