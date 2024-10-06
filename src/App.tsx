import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Experience />
        <Skills />
      </main>
    </>
  );
}

export default App;
