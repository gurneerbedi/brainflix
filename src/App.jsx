import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Upload from "./pages/Upload/Upload";
import VideoDetails from "./pages/VideoDetails/VideoDetails";
import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const BASE_URL = "http://localhost:8800/";
  const [videoList, setVideoList] = useState([]);

  async function getVideoList() {
    try {
      const response = await axios.get(`${BASE_URL}videos`);

      setVideoList(response.data);
    } catch (error) {
      console.error("Error getVideoList:" + error);
    }
  }

  useEffect(() => {
    getVideoList();
  }, []);
  if (videoList.length === 0) {
    return (
      <div>
        <h1>Loading Page</h1>
      </div>
    );
  }

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VideoDetails videoList={videoList} />} />
          <Route path="video-upload" element={<Upload />} />
          <Route
            path="/videos/:objID"
            element={<VideoDetails videoList={videoList} />}
          />
        </Routes>
      </BrowserRouter> 
  );
}
export default App;
