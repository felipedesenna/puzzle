import { useEffect, useState, useId } from 'react'

import './App.css'

function App() {
  const zeroId = useId()
  const initialConfiguration = [1, 2, 0, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  const [newValue, setNewValue] = useState(0)
  const [newState, setNewState] = useState(initialConfiguration)

  useEffect(() => {
    if (newValue !== 0) {
      const findIndex = initialConfiguration.indexOf(newValue)
      const findIndexZero = initialConfiguration.indexOf(0)

      initialConfiguration.splice(findIndex, 1, 0)
      initialConfiguration.splice(findIndexZero, 1, newValue)

      setNewState(initialConfiguration)
    }
  }, [newValue])

  function onSolveCallback() {
    alert('Sucesso ao resolver o puzzle')
  }

  return (
    <div className="board">
      {newState.map(value => value == 0 ? (
        <div key={zeroId} className="empty" onClick={onSolveCallback} />
      ) : (
        <div key={value} className="tile" onClick={() => setNewValue(value)}>{value}</div>
      ))}
    </div>
  )
}

export default App
