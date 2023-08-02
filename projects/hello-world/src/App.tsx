import './App.css'
import { TwitterFollowCard, TwitterFollowCardProps } from './TwitterFollowCard'

export function App() {
  const addAt = (username: string) => `@${username}`

  const cesarjzo: TwitterFollowCardProps = { isFollowing: true, username: 'CesarJZO', formatUserName: addAt }

  return (
    <section className='App'>
      <TwitterFollowCard username="CesarJZO">
        <i>César Zárate</i>
      </TwitterFollowCard>
      
      <TwitterFollowCard formatUserName={addAt}>
        <strong>César Zárate</strong>
      </TwitterFollowCard>

      <TwitterFollowCard username="CesarJZO" isFollowing>
        <strong>César Zárate</strong>
        {/* There can be any children */}
      </TwitterFollowCard>

      {/* Sending props as an object using the spread operator, but it's not recommended */}
      <TwitterFollowCard {...cesarjzo}>
        <b>César Zárate</b>
      </TwitterFollowCard>
    </section>
  )
}
