import { useState, useEffect, useRef } from 'react';
import AccordionExpandIcon from '../components/Accordian';
import { architecturalDesign, interiorDesign, furnitureProduction } from './content';
import architecture from '../assets/videos/architectureal_360.mp4';
import interior from '../assets/videos/interiordesign_360.mp4';
import furniture from '../assets/videos/furnitureproduction_360.mp4';
import { styles } from '../styles/Desc_styles';
import { useInView } from 'react-intersection-observer';

function AnimatedVideo({ videoSrc, triggerTransition, containerRef }) {
  const [showOverlay, setShowOverlay] = useState(false);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (triggerTransition && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();

      // 1. Show fullscreen overlay initially
      setShowOverlay(true);

      // 2. Animate after slight delay
      setTimeout(() => {
        if (overlayRef.current) {
          overlayRef.current.style.transform = `translate(${containerRect.left}px, ${containerRect.top}px) scale(${containerRect.width / window.innerWidth}, ${containerRect.height / window.innerHeight})`;
        }
      }, 100);

      // 3. After animation, hide overlay & reveal container video
      setTimeout(() => {
        setShowOverlay(false);
      }, 2100);
    }
  }, [triggerTransition, containerRef]);

  return (
    <>
      {/* Overlay Video */}
      {showOverlay && (
        <div
          ref={overlayRef}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 1000,
            overflow: 'hidden',
            borderRadius: '10px',
            transition: 'transform 2s ease-in-out',
            transformOrigin: 'top left',
          }}
        >
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
      )}

      {/* Normal Container Video */}
      <div
        ref={containerRef}
        style={{
          position: 'relative',
          width: '100%',
          height: '400px',
          overflow: 'hidden',
          borderRadius: '10px',
          visibility: showOverlay ? 'hidden' : 'visible',
        }}
      >
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
    </>
  );
}


const sections = [
  { title: "/Architectural Design", content: architecturalDesign, videoSrc: architecture },
  { title: "/Interior Design", content: interiorDesign, videoSrc: interior },
  { title: "/Furniture Production", content: furnitureProduction, videoSrc: furniture },
];

export default function Usp() {
  return (
    <div>
      {sections.map((section, index) => (
        <SectionBlock key={index} section={section} />
      ))}
    </div>
  );
}


function SectionBlock({ section }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const containerRef = useRef(null);
  const [playTransition, setPlayTransition] = useState(false);

  useEffect(() => {
    if (inView) {
      setPlayTransition(true);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      style={{
        ...styles.rowcontainer,
        gap: "20px",
        alignItems: "center",
        justifyContent: "center",
        width:"100%",
        height:"100vh",
      }}
    >
      <div style={{ flex: 1, width: "40%" }}>
        <AccordionExpandIcon content={section.content} />
      </div>

      <div style={{ flex: 2, position: 'relative' }}>
        <AnimatedVideo
          videoSrc={section.videoSrc}
          triggerTransition={playTransition}
          containerRef={containerRef}
        />
      </div>
    </div>
  );
}
