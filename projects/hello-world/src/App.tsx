import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
  const addAt = (username: string) => `@${username}`

  return (
    <section className='App'>
      <TwitterFollowCard username="CesarJZO">
        <i>César Zárate</i>
      </TwitterFollowCard>
      <TwitterFollowCard username="CesarJZO" formatUserName={addAt}>
        <b>César Zárate</b>
      </TwitterFollowCard>
      <TwitterFollowCard username="CesarJZO" isFollowing>
        <strong>César Zárate</strong>
        {/* There can be any children */}
      </TwitterFollowCard>
    </section>
  )
}
