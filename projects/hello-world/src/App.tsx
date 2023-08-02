import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    name: 'Dan Abramov',
    username: 'dan_abramov',
    isFollowing: true
  },
  {
    name: 'Ryan Florence',
    username: 'ryanflorence',
    isFollowing: false
  },
  {
    name: 'Michael Jackson',
    username: 'mjackson',
    isFollowing: true
  },
  {
    name: 'Kent C. Dodds',
    username: 'kentcdodds',
    isFollowing: false
  },
  {
    name: 'Emma Wedekind',
    username: 'EmmaWedekind'
  }
]

export function App() {
  return (
    <section className='App'>
      {
        users.map(({ name, username, isFollowing }) => { // Destructuring the user object
          // const { name, username, isFollowing } = user
          return (
            <TwitterFollowCard
              key={username} // React needs a key to keep track of the elements in the list
              username={username}
              initialIsFollowing={isFollowing}>
              <strong>{name}</strong>
            </TwitterFollowCard>
          )
        })
      }
    </section>
  )
}
