export function TwitterFollowCard(props: { username: string, name: string, isFollowing: boolean }) {
  return (
    // Declaring a class in JSX using a prefix
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${props.username}`}
          alt={`${props.username} profile picture`} />
        <div className="tw-followCard-info">
          <strong>{props.name}</strong>
          <span className="tw-followCard-infoUsername">
            @{props.username}
          </span>
        </div>
      </header>

      <aside>
        <button className="tw-followCard-button">
          {props.isFollowing ? 'Following' : 'Follow'}
        </button>
      </aside>
    </article>
  )
}
