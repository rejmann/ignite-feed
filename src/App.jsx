import Container from './components/Container'
import Post from './components/Post'
import Profiler from './components/Profiler'
import Header from './components/Header'

import avatarUrl from './assets/img/profiler.jpeg'
import backgroundUrl from './assets/img/profiler-background.jpg'

import './global.css'

export default function App() {
  return (
    <>
      <Header />
      <Container>
        <Profiler
          name="Rejman Nascimento"
          role="Dev Fullstack"
          avatarUrl={avatarUrl}
          backgroundUrl={backgroundUrl}
        />
        <div className="inline-block w-full">
          <Post
            name="Rejman Nascimento"
            role="Dev Fullstack"
            avatarUrl={avatarUrl}
          />
          <Post
            name="Rejman Nascimento"
            role="Dev Fullstack"
            avatarUrl={avatarUrl}
          />
      </div>
      </Container>
    </>
  )
}
