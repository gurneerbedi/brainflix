import { useState } from "react";
import "./App.scss";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home/Home";
import Upload from "./pages/Upload/Upload";
import VideoDetails from "./pages/VideoDetails/VideoDetails";

function App() {

  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path = "video-upload" element={<Upload/>} />
    <Route path= "/videos/:objID" element={<VideoDetails/>}/>
  </Routes>
  </BrowserRouter>

    </>
  );
}

export default App;
