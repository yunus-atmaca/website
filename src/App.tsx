import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Social from "./components/Social";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Experience />
        <Skills />
        <Projects />
      </main>
      <Social />
    </>
  );
}

export default App;
