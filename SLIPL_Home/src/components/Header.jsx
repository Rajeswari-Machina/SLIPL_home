import Box from '@mui/material/Box';
import styles from '../styles/header.module.css';
function Header(){
  return(
  <Box className={styles.header}>
    <Box className={styles.flex}>
      <Box className={styles.left}>
        SLIPL
      </Box>
      <Box className={styles.right}>
        <Box>
          ABOUT 
        </Box>
        <Box>
          PORTFOLIO 
        </Box>
        <Box>
          CONTACTS
        </Box>
        <Box>
          SERVICES
        </Box>
      </Box>
    </Box>
  </Box>
  )
}

export default Header;