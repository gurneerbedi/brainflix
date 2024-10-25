import { useState } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'
import VideoInfo from './components/VideoInfo/VideoInfo'

import videodata from './data/video-details.json'


function App() {
  const currentVideo = videodata[0];

  return (
    <>
    <Header/>
     <VideoPlayer/>
     <VideoInfo
      video={currentVideo}
     />
    </>
  )
}

export default App
