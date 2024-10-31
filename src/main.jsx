import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App.jsx'
import Upload from './pages/Upload/Upload.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>} />
    <Route path = "video-upload" element={<Upload/>} />
  </Routes>
  </BrowserRouter>
);






