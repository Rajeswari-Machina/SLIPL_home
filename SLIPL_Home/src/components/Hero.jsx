import video1 from '../assets/videos/video1_360.mp4';
import styles from '../styles/header.module.css';
import heroLogo from '../assets/images/herologo.svg';
function Hero(){
  return (
    <>
    <div>
      <video
        src={video1}
        autoPlay
        muted
        loop
        className={styles.videos}
      />
      <div className={styles.content1}></div>
      <div className={styles.content }>
        <img src={heroLogo} alt="logo" className={styles.heroLogo}/>
        <p className={styles.description}><span style={{color: "#d38c37"}} >A LEADING INTERNATIONAL BUREAU </span>FOR PREMIUM ARCHITECTURAL AND INTERIOR DESIGN</p>
      </div>
      
    </div>
  
    </>
  
  );
}

export default Hero;