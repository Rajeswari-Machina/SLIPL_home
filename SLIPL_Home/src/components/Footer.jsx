import minilogo from '../assets/images/mini_logo.svg'
import exclude from '../assets/images/footerImages/Exclude.svg';
import facebook from '../assets/images/footerImages/facebook.svg';
import instagram from '../assets/images/footerImages/insta.svg';
import whatsapp from '../assets/images/footerImages/whatsap.svg';
import pinterest from '../assets/images/footerImages/pinterest.svg';
import youtube from '../assets/images/footerImages/youtube.svg';
const styles={
  container:{ // Fixed typo from 'conatiner' to 'container'
    display: "flex",
    flexDirection:"row", // This creates 4 columns, not rows
    justifyContent: "space-between",
    gap: "30px",
    fontSize:"14px",
    color:"var(--primary-color)",
  },
  colContainer:{
    display: "flex",
    flexDirection:"column",
    alignItems: "center",
    gap:"10px",
  },
  list:{
    display:"flex",
    flexDirection: "column", // This makes items stack vertically in each column
    gap:"40px",
    listStyleType: "none",
  },
  item:{
    textDecoration: "none",
    textTransform: "uppercase",
    fontWeight: "500",
  }
}

export default function Footer(){
  return(
    <div style={{...styles.container,backgroundColor:"black",width:"100%",height:"100vh",paddingTop:"20%"}}>
      <div style={{...styles.container,width:"60%"}}>
          <ul style={{...styles.list}}>
            <li style={{...styles.item}}>About Us</li> 
            <li style={{...styles.item}}>Contacts</li>
            <li style={{...styles.item}}>Services</li>
            <li style={{...styles.item}}>Career</li>
            <li style={{...styles.item}}>Blog</li>
          </ul>
          <ul style={{...styles.list}}>
            <li style={{...styles.item}}>Portfolio</li> 
            <li style={{...styles.item}}>Commercials</li>
            <li style={{...styles.item}}>Artitectural design</li>
            <li style={{...styles.item}}>Residential Interiors</li>
            <li style={{...styles.item}}>Furniture Brand Fiftyfourms</li>
          </ul>
          <ul style={{...styles.list}}>
            <li style={{color:"var(--primary-color)",fontSize:"13px"}}>Privacy Policy</li> 
          </ul>

      </div>
      <div style={{...styles.colContainer,gap:"40px"}}>
        <div>
          <img src={minilogo} alt="logo" style={{width:"50%",height:"100%"}}/>
          <p style={{fontSize:"13px"}}>© 2013 — 2025 Studia-54 Interior Design and Engineering</p>
        </div>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",gap:"30px"}}>
            <div>
            <img src={exclude} alt="logo" style={{width:"100%",height:"100%"}}/>
            </div>
            <div>
            <img src={facebook} alt="logo" style={{width:"100%",height:"100%"}}/>
            </div>
            <div>
            <img src={instagram} alt="logo" style={{width:"100%",height:"100%"}}/>
            </div>
            <div>
            <img src={whatsapp} alt="logo" style={{width:"100%",height:"100%"}}/>
            </div>
            <div>
            <img src={pinterest} alt="logo" style={{width:"100%",height:"100%"}}/>
            </div>
            <div>
            <img src={youtube} alt="logo" style={{width:"100%",height:"100%"}}/>
            </div>
        </div>

      </div>
    </div>
  )
}