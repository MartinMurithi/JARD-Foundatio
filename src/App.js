import NavBar from './components/nav/NavBar';
import Hero from "./components/hero/Hero";
import About from './components/about/About';
import Mission from './components/mission-vision/Mission';

function App() {
  return (
    <div className="App">
     <NavBar />
     <Hero />
     <About />
     <Mission />
    </div>
  );
}

export default App;
