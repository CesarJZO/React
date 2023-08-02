import './App.css'

export function App() {
  return (
    // Declaring a class in JSX using a prefix
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src="https://pbs.twimg.com/profile_images/1409692629399265283/xecXBcBR_400x400.jpg"
          alt="CesarJZO profile picture" />
        <div className="tw-followCard-info">
          <strong>César Zárate</strong>
          <span className="tw-followCard-infoUsername">
            @CesarJZO
          </span>
        </div>
      </header>

      <aside>
        <button className="tw-followCard-button">
          Follow
        </button>
      </aside>
    </article>
  )
}
