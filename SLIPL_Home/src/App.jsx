import Header from './components/Header';
import Hero from './components/Hero';

import Team from './components/Team';
import Projects from './components/Projects';
import Contact from './components/Contact';
function App(){
  return (
    <>
      <div>
        <Header />
        <Hero />
        
      </div>
      <div style={{ position: "relative",  color: "white", marginTop: "100vh" }}>
          <Team/>
          <Projects/>
          <Contact/>
      </div>
    </>
  );
}

export default App;
