import {styles} from '../styles/Desc_styles';
export default function Worldproject(){
  return(
    <div style={{...styles.rowcontainer}}>
      <div style={{...styles.colcontainer}}>
        <div style={{width:"50%",marginLeft:"2"}}>
          <p style={{...styles.title}}>OUR PROJECTS AROUND THE WORLD</p>
          <p style={{...styles.subTitle}}>Today, we have <span style={{color:"var(--accent-color)"}} >the most extensive portfolio </span> and project scope in the premium segment
          <br/>
              Over 600 projects in 32 countries, with an average area starting from 900 m²
          </p>
        </div>
        <div style={{width:"100%", overflow: "hidden"}}>
         corousel
        </div>
      </div>
      <div style={{width:"50%"}}>
          3D globe 
      </div>
    </div>
  )
}