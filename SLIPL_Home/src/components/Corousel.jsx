import image1 from '../assets/images/corouselImages/image1.png';
import '../styles/corousel.css';
export default function Corousel(){
  return (
    <div className="slider">
      <div className="slidertrack">
        <div className="slide">
          <img src={image1} alt="team image"/>
        </div>
        <div className="slide">
          <img src={image1} alt="team image"/>
        </div>
        <div className="slide">
          <img src={image1} alt="team image"/>
        </div>

        <div className="slide">
          <img src={image1} alt="team image"/>
        </div>
        <div className="slide">
          <img src={image1} alt="team image"/>
        </div>
        <div className="slide">
          <img src={image1} alt="team image"/>
        </div>
        
      </div>      
    </div>
  )
}
