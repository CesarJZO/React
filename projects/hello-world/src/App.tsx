import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
  const [name, setName] = useState('midudev')

  return (
    <section className='App'>
      <TwitterFollowCard username="CesarJZO">
        <i>César Zárate</i>
      </TwitterFollowCard>
      
      <TwitterFollowCard>
        <strong>César Zárate</strong>
      </TwitterFollowCard>

      <TwitterFollowCard username={name}>
        <strong>César Zárate</strong>
        {/* There can be any children */}
      </TwitterFollowCard>

      <button onClick={() => setName('pedromichel')}>
        Change name
      </button>
    </section>
  )
}
