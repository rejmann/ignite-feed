import Post from './components/Post'
import Profiler from './components/Profiler'
import Header from './components/Header'

import avatarUrl from './assets/img/profiler.jpeg'
import backgroundUrl from './assets/img/profiler-background.jpg'

import './global.css'

const posts = [
  {
    name: 'Rejman Nascimento',
    role: 'Dev Fullstack',
    avatarUrl: avatarUrl
  },
  {
    name: 'Rejman Nascimento',
    role: 'Dev Fullstack',
    avatarUrl: avatarUrl
  },
]

export default function App() {
  return (
    <>
      <Header />
      <div className="w-full sm:inline-block md:flex sm:gap-1 sm:mt-2 md:gap-6 sm:px-4 md:pt-6 xl:px-56 lg:px-8">
        <Profiler
          name="Rejman Nascimento"
          role="Dev Fullstack"
          avatarUrl={avatarUrl}
          backgroundUrl={backgroundUrl}
        />
        {!! posts.length && (
          <div className="inline-block w-full">
          {posts.map(post => {
            return (
              <Post
                key={post.avatarUrl}
                name={post.name}
                role={post.role}
                avatarUrl={post.avatarUrl}
              />
            )
          })}
          </div>
        )}
      </div>
    </>
  )
}
