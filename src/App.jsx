import { useState } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <VideoPlayer/>
    </>
  )
}

export default App
