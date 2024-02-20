import Container from './components/Container'
import Comment from './components/Container/Comment'
import Profiler from './components/Container/Profiler'
import Header from './components/Header'

import profilerPhoto from './assets/img/profiler.jpeg'
import profilerBackgroundPhoto from './assets/img/profiler-background.jpg'

import './global.css'

export default function App() {
  return (
    <>
      <Header />
      <Container>
        <Profiler
          name="Rejman Nascimento"
          office="Dev Fullstack"
          profilerPhoto={profilerPhoto}
          profilerBackgroundPhoto={profilerBackgroundPhoto}
        />
        <div className="inline-block w-full">
          <Comment
            name="Rejman Nascimento"
            office="Dev Fullstack"
            profilerPhoto={profilerPhoto}
          />
          <Comment
            name="Rejman Nascimento"
            office="Dev Fullstack"
            profilerPhoto={profilerPhoto}
          />
      </div>
      </Container>
    </>
  )
}
