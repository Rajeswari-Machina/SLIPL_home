import Corousel from "./Corousel";
export default function Team(){
  const styles={
    colcontainer:{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "column",
      gap: "20px",
    },
    rowcontainer:{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
      marginTop: "100px",
      marginLeft:"0",
    },
    
    title:{
      color: "var(--accent-color)",
      textTransform: "uppercase",
      fontSize: "clamp(14px, 1.0356cqi + 10.1165px, 30px)",
      width:"100%",
  
    },
    subTitle:{
      textTransform: "uppercase",
      fontSize:"26px",
    },
    description:{
      fontSize: "17px",
      color: "var(--second-text-color)",
      fontWeight:"300",
    },
    container:{
      backgroundColor: "var(--bg-card-background)",
      borderRadius: "40px",
      padding: "32px",
  
    }
  }
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