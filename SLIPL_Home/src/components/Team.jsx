import Corousel from "./Corousel";
import {styles} from '../styles/Desc_styles'
export default function Team(){
  
  return (
    <div style={{ ...styles.rowcontainer }}>
      <div style={{ ...styles.colcontainer, width: "30%", marginLeft: "5%" }}>
        <div style={{ ...styles.colcontainer, ...styles.container, width: "100%" }}>
          <p style={styles.title}>/STUDIA 54'S TEAM</p>
          <p style={styles.subTitle}>
            Your project in the hands of
            <span style={{ color: "var(--accent-color)" }}> 200 professionals</span>
          </p>
          <p style={styles.description}>
            Your project begins in our 800 m² office, where a dedicated team of 200 experts
            brings your vision to life in Studia 54’s distinctive style.
          </p>
        </div>
        <div style={{ width: "100%", ...styles.container }}>
          <p style={styles.description}>
            Every detail is meticulously managed by your personal project manager,
            ensuring seamless execution from concept to completion through our structured premium project methodology.
          </p>
        </div>
      </div>
      <div style={{ ...styles.content, textAlign: "center", width: "60%" }}>
        <Corousel />
      </div>
    </div>
  );
}
