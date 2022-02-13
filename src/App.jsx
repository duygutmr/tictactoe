import { useState } from 'react'
import './styles/root.scss';
import Board from './components/Board'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
     <h1>TIC TAC TOE</h1>
     <Board/>
    </div>
  )
}

export default App
