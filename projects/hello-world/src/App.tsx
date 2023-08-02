import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {

  const components = []

  for (let i = 0; i < 5; i++) {
    components.push(<TwitterFollowCard username={`user${i}`}>
      César Zárate
    </TwitterFollowCard>)
  }

  return (
    <section className='App'>
      {components}
    </section>
  )
}
