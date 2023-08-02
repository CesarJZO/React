import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const createButton = (text: string) => <button>{text}</button>

root.render(
  <React.Fragment>
    {createButton('Hello')}
    {createButton('World')}
    {createButton('!')}
  </React.Fragment>
)
