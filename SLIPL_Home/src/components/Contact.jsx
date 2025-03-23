import image2 from '../assets/images/managers.png';
import image3 from '../assets/images/pool.png';
import {styles} from '../styles/Desc_styles';
import Form from './Form';
export default function Contact(){
  const images = [image2, image3];
  const randomImage = images[Math.floor(Math.random() * images.length)];

  return (
    <div style={{ ...styles.rowcontainer, backgroundColor: "black", borderRadius: "15px", width: "100%", marginTop:"2%", boxSizing: "border-box" }}>
      <div style={{ padding: "20px", width: "60%" }}>
        <img src={randomImage} alt="team image" style={{ maxWidth: "100%", height: "auto" }} />
      </div>
      <div style={{ ...styles.colcontainer,width:"40%" }}>
        <div>
          <p style={{ ...styles.subTitle, width: "100%" }}>Step into the world of Studia 54</p>
          <p style={{ ...styles.description }}>A place where your dreams take shape through the unique vision of our studio.
            We look forward to embarking on this inspiring journey with you and bringing your project to life</p>
        </div>
        <div style={{width:"100%"}}>
          <p style={{ color: "var(--accent-color)"}}>Fill out the form and our manager will contact you</p>
          <Form />
        </div>
      </div>
    </div>
  );
}

