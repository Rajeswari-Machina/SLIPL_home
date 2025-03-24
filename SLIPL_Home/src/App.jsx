import Header from './components/Header';
import Hero from './components/Hero';
import Worldproject from './components/Worldproject';
import Usp from './components/Usp';
import Team from './components/Team';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App(){
  return (
    <>
      <div style={{ overflow: "hidden" }}>
        <Header />
        <Hero />
      </div>
      <div style={{ position: "relative", color: "white", marginTop: "100vh", overflow: "hidden" }}>
      <div>
          <Worldproject/>
          <Usp />
        </div>
        <Team />
        <Projects />
        <Contact />
        <Footer />
        
      </div>
      
    </>
  );
}

export default App;
