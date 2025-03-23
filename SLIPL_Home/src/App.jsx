import Header from './components/Header';
import Hero from './components/Hero';

import Team from './components/Team';

function App(){
  return (
    <>
      <div>
        <Header />
        <Hero />
        
      </div>
      <div style={{ position: "relative",  color: "white", marginTop: "100vh" }}>
          <Team/>

        </div>
    </>
  );
}

export default App;
