import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App.jsx'
import Upload from './pages/Upload/Upload.jsx'
import VideoInfo from "./components/VideoInfo/VideoInfo.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>

  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>}/>
    <Route path = "video-upload" element={<Upload/>} />
    <Route path= "/video-details/:objID" element={<App/>}/>
  </Routes>
  </BrowserRouter>
  </StrictMode>
);






