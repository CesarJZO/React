import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
  const addAt = (username: string) => `@${username}`

  return (
    <section className='App'>
      <TwitterFollowCard username="CesarJZO">
        <TwitterFollowCard username="CesarJZO">
          <h1>
            César Zárate
          </h1>
        </TwitterFollowCard>
      </TwitterFollowCard>
      <TwitterFollowCard username="CesarJZO" formatUserName={addAt}>
        <h1>
          César Zárate
        </h1>
      </TwitterFollowCard>
      <TwitterFollowCard username="CesarJZO" isFollowing>
        <strong>César Zárate</strong>
      </TwitterFollowCard>
    </section>
  )
}
