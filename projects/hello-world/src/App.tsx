import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
  const addAt = (username: string) => `@${username}`

  return (
    <section className='App'>
      <TwitterFollowCard
        username="CesarJZO"
        name="César Zárate"
      />
      <TwitterFollowCard
        formatUserName={addAt}
        username="midudev"
        name="Midu"
      />
      <TwitterFollowCard
        username="AlexCVJ"
        name="Alex P🐷"
        isFollowing
      />
    </section>
  )
}
