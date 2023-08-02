import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
  return (
    <section className='App'>
      <TwitterFollowCard
        username="CesarJZO"
        name="César Zárate"
        isFollowing={true}
      />
      <TwitterFollowCard
        username="midudev"
        name="Midu"
        isFollowing={true}
      />
      <TwitterFollowCard
        username="AlexCVJ"
        name="Alex P🐷"
        isFollowing={false}
      />
    </section>
  )
}
