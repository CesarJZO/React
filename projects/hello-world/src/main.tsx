import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const Button = ({ text }: { text: string }) => <button>{text}</button>

root.render(
  <React.Fragment>
    <Button text="Hello" />
    <Button text="World" />
  </React.Fragment>
)
