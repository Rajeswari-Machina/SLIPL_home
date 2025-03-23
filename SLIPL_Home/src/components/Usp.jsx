import AccordionExpandIcon from '../components/Accordian';
import { architecturalDesign,interiorDesign, furnitureProduction} from './content';
import architecture from '../assets/videos/architectureal_360.mp4';
import interior from '../assets/videos/interiordesign_360.mp4';
import furniture from '../assets/videos/furnitureproduction_360.mp4';
import {styles} from '../styles/Desc_styles';
// import { useInView } from 'react-intersection-observer';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
function VideoPlayer({ videoSrc }) {
    return (
      
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        }}
      />

    );
  }
export default function Usp(){
  const sections = [
    { title: "/Architectural Design", content: architecturalDesign, videoSrc: architecture },
    { title: "/Interior Design", content: interiorDesign, videoSrc: interior },
    { title: "/Furniture Production", content: furnitureProduction, videoSrc: furniture },
  ];

  return (
    <div>
      {sections.map((section, index) => (
        <div key={index} style={{ ...styles.rowcontainer,gap:"20px",border:"none" ,maxHeight:"80vh",overflow:"hidden"}}>
          <div style={{ flex: 1,width:"40%" }}>
            <AccordionExpandIcon content={section.content} />
          </div>
          <div style={{ flex: 2, position: 'relative' }}>
            <VideoPlayer videoSrc={section.videoSrc} />
          </div>
        </div>
      ))}
    </div>
  );


}