import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Upload from "./pages/Upload/Upload";
import VideoDetails from "./pages/VideoDetails/VideoDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VideoDetails />} />
          <Route path="video-upload" element={<Upload />} />
          <Route path="/videos/:objID" element={<VideoDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
