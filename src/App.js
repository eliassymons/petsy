import "./style.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Popular from "./components/Popular";
import About from "./components/About";
import Encounters from "./components/Encounters";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Popular />
      <About />
      <Encounters />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
