import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {

  return (
    <section className='App'>
      <TwitterFollowCard username="CesarJZO" initialIsFollowing>
        <i>César Zárate</i>
      </TwitterFollowCard>
      
      <TwitterFollowCard>
        <strong>César Zárate</strong>
      </TwitterFollowCard>

      <TwitterFollowCard username="midudev">
        <strong>Midu</strong>
        {/* There can be any children */}
      </TwitterFollowCard>
    </section>
  )
}
