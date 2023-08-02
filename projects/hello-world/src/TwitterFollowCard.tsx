export function TwitterFollowCard(
  props: {
    username: string,
    formatUserName?: (username: string) => string,
    isFollowing?: boolean,
    children?: React.ReactNode
  },
  ) {
  return (
    // Declaring a class in JSX using a prefix
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${props.username}`}
          alt={`${props.username} profile picture`} />
        <div className="tw-followCard-info">
          {props.children}
          <span className="tw-followCard-infoUsername">
            {props.formatUserName ? props.formatUserName(props.username) : `${props.username}`}
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
