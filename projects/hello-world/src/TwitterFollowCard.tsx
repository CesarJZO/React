export interface TwitterFollowCardProps {
  username: string,
  formatUserName?: (username: string) => string,
  isFollowing?: boolean,
  children?: React.ReactNode
}

TwitterFollowCard.defaultProps = {
  username: 'unknown'
};

export function TwitterFollowCard({
  username,
  formatUserName,
  isFollowing,
  children
}: TwitterFollowCardProps) {
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
            {formatUserName ? formatUserName(username) : `${username}`}
          </span>
        </div>
      </header>

      <aside>
        <button className="tw-followCard-button">
          {isFollowing ? 'Following' : 'Follow'}
        </button>
      </aside>
    </article>
  )
}
