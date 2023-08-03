import React from 'react'
import './App.css'

const TURNS = {
  X: 'x',
  O: 'o'
}

const board = Array(9).fill(null)

const Square = (props: { children: React.ReactNode, updateBoard, index }) => {
  return (
    <div className='square'>
      {props.children}
    </div>
  )
}

function App() {
  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}>
                  {index}
              </Square>
            )
          })
        }
      </section>
    </main>
  )
}

export default App
