import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import "./css/burger.css";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutMe />
      <Projects />
      <Blog />
    </>
  );
}

export default App;
