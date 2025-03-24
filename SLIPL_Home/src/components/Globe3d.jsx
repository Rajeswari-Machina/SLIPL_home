import React, { useState, useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';
import * as THREE from 'three';

const backgroundColor = 'black';

const World = () => {
  const [countries, setCountries] = useState({ features: [] });
  const globeEl = useRef();

  useEffect(() => {
    // Set background color
    document.body.style.backgroundColor = backgroundColor;

    // Load geojson data
    fetch('../assets/datasets/ne_110m_admin_0_countries.geojson')
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.error('Error loading GeoJSON:', err));

    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.5;
    }
  }, [countries]);

  return (
    <Globe
      ref={globeEl}
      globeMaterial={new THREE.MeshPhongMaterial({
        color: 'black',
        emissive: 'black'
      })}
      backgroundColor={backgroundColor}
      globeImageUrl="https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-dark.jpg"
      hexPolygonsData={countries.features}
      hexPolygonResolution={3}
      hexPolygonMargin={0.3}
      hexPolygonUseDots={true}
      hexPolygonColor={() =>
        `#${Math.round(Math.random() * Math.pow(2, 24))
          .toString(16)
          .padStart(6, '0')}`
      }
      hexPolygonLabel={({ properties: d }) => (
        `<div><b>${d.ADMIN} (${d.ISO_A2})</b><br>Population: <i>${d.POP_EST}</i></div>`
      )}
    />
  );
};

const App = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0 }}>
      <World />
    </div>
  );
};

export default App;
