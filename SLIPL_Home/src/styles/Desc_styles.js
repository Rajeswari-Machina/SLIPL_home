export const styles={
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