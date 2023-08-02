import { useState } from "react"

interface TwitterFollowCardProps {
  username: string,
  initialIsFollowing?: boolean,
  children?: React.ReactNode
}

TwitterFollowCard.defaultProps = {
  username: 'unknown'
}

export function TwitterFollowCard({ username, children, initialIsFollowing }: TwitterFollowCardProps) {
  // False is the default value for the state.
  // The initial value is only used the first time the component is rendered.
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  // Equivalent to:
  // const state = useState(false)
  // const value = useState(false)[0] // or state[0]
  // const setIsFollowing = useState(false)[1] // or state[1]

  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    // Declaring a class in JSX using a prefix
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${username}`}
          alt={`${username} profile picture`} />
        <div className="tw-followCard-info">
          {children}
          <span className="tw-followCard-infoUsername">
            {`@${username}`}
          </span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{isFollowing ? 'Following' : 'Follow'}</span>
          <span className="tw-followCard-stopFollow">Unfollow</span>
        </button>
      </aside>
    </article>
  )
}
