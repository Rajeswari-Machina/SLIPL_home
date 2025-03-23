import {styles} from '../styles/Desc_styles';
import VerticalScroll from './verticalScroll';
export default function Projects(){
  return(
    <div style={{marginTop:"1%"}}>
      <p style={styles.title}>/ Studia 54 projects</p>
      <div style={{...styles.rowcontainer,alignItems:"flex-start"}}> 
        <div style={{width:"70%"}}>
          <VerticalScroll/>
        </div>
        <div style={{...styles.colcontainer,width:"40%",padding:"4%",}}>
          <p style={{...styles.subTitle,width:"100%"}}>WE KNOW WHAT YOU NEED</p>
          <p style={styles.description}> 
          Executing projects across multiple countries requires flawless organization and control. 
          Every stage — from planning to production — follows a structured framework that guarantees an impeccable result.
          By handling the entire process, we free you from unnecessary concerns, allowing you to fully enjoy the journey of creating your dream home
          </p>
        </div>
      </div>
    </div>
  )
}