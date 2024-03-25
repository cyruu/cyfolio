import "./App.css";
import Navbar from "./components/Navbar";
import { SinglePageComponent, SingleBlog } from "./components/index";
import "./css/burger.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<SinglePageComponent />} />
          <Route path="/:page" element={<SinglePageComponent />} />
          <Route path="/blog/:blogId" element={<SingleBlog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
