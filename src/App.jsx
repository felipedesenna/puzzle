import { useEffect, useState, useId } from 'react'

import './App.css'

const initialConfiguration = [1, 2, 0, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

function App() {
  const zeroId = useId()
  const [puzzleId, setPuzzleId] = useState(0)
  const [newState, setNewState] = useState([])

  function onChangePuzzle(value) {
    const findIndex = initialConfiguration.indexOf(value)
    const findIndexZero = initialConfiguration.indexOf(0)

    initialConfiguration.splice(findIndex, 1, 0)
    initialConfiguration.splice(findIndexZero, 1, value)

    return initialConfiguration
  }

  useEffect(() => {
    if (puzzleId !== 0) {
      const result = onChangePuzzle(puzzleId)
      setNewState([...result])
    } else {
      setNewState(initialConfiguration)
    }
  }, [puzzleId])

  function onSolveCallback() {
    alert('Sucesso ao resolver o puzzle')
  }

  return (
    <div className="board">
      {newState.map(value => value == 0 ? (
        <div key={zeroId} className="empty" onClick={onSolveCallback} />
      ) : (
        <div key={value} className="tile" onClick={() => setPuzzleId(value)}>{value}</div>
      ))}
    </div>
  )
}

export default App
