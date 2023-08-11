import React, { useState } from 'react'
import './App.css'

const TURNS = {
  X: '×',
  O: '○'
}

const WINNING_COMBINATIONS = [
  // Horizontal
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // Vertical
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // Diagonal
  [0, 4, 8],
  [2, 4, 6]
]

const Square = ({ children, isSelected, updateBoard, index }) => {

  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    if (!updateBoard) return
    if (index === undefined) return

    updateBoard(index)
  }

  return (
    <div
      className={className}
      onClick={handleClick}>
      {children}
    </div>
  )
}

function App() {
  const [board, setBoard] = useState(
    // ['×', '○', '×', '○', '×', '○', '×', '○', '×']
    Array(9).fill(null)
  )

  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const checkWinner = (board) => {
    for (const combination of WINNING_COMBINATIONS) {
      const [a, b, c] = combination

      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]
      }
    }
    return null
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return

    // newBoard is created because we can't mutate the state directly
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    }
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

      {
        winner && (
          <section className='winner'>
              <div className='text'>
                <h2>
                  {
                    winner === false
                      ? 'Draw'
                      : `Winner is`
                  }
                </h2>

                <header className='win'>
                  {winner && <Square>{winner}</Square>}
                </header>

                <footer>
                  <button>Play again!</button>
                </footer>
              </div>
          </section>
        )
      }
    </main>
  )
}

export default App
