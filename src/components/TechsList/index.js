import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

function TechsList() {
  const [newTech, setNewTech] = useState('')
  const dispatch = useDispatch()
  const techs = useSelector(state => state.techs)

  function handleAddTech() {
    dispatch({ type: 'ADD_TECH', payload: { tech: newTech } })
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
