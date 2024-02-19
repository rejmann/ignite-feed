import Container from './components/Container'
import Header from './components/Header'

import './global.css'

export default function App() {
  return (
    <>
      <Header />
      <div className="w-full flex justify-center">
        <Container />
      </div>
    </>
  )
}
