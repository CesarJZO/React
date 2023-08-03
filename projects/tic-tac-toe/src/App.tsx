import React, { useState } from 'react'
import './App.css'

const TURNS = {
  X: '×',
  O: '○'
}

const Square = (props: {
  children: React.ReactNode,
  isSelected?: boolean,
  updateBoard?: (i:number) => void,
  index?: number
}) => {

  const className = `square ${props.isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    if (!props.updateBoard) return
    if (props.index === undefined) return

    props.updateBoard(props.index)
  }

  return (
    <div
      className={className}
      onClick={handleClick}>
      {props.children}
    </div>
  )
}

function App() {
  const [board, setBoard] = useState(
    // ['×', '○', '×', '○', '×', '○', '×', '○', '×']
    Array(9).fill(null)
  )

  const [turn, setTurn] = useState(TURNS.X)

  const updateBoard = (index: number) => {
    const newBoard = [...board]
    newBoard[index] = turn
    
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
  }

  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}>
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
    </main>
  )
}

export default App
