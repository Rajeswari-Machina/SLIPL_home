import {styles} from '../styles/Desc_styles';
import Imagecorousel from './Imagecorousel';
import Globe3d from './Globe3d';
export default function Worldproject(){
  return(
    <div style={{...styles.rowcontainer, gap: "2px", paddingLeft: "10px", height: "100vh"}}>
      <div style={{...styles.colcontainer, width:"40%", overflow: "auto"}}>
        <div style={{width: "80%"}}>
          <p style={{...styles.title, width: "100%"}}>OUR PROJECTS AROUND THE WORLD</p>
          <p style={{...styles.subTitle}}>Today, we have <span style={{color: "var(--accent-color)"}} >the most extensive portfolio </span> and project scope in the premium segment
          <br/>
              Over 600 projects in 32 countries, with an average area starting from 900 m²
          </p>
        </div>
        <div style={{width: "80%", height: "100%"}}>
          <Imagecorousel/>
        </div>
      </div>
      <div id="globe"style={{width: "60%", height: "100%"}}>
          <Globe3d />
      </div>
    </div>
  )
}