import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import {styles} from '../styles/Desc_styles'
export default function AccordionExpandIcon({ content }) {
  return(
    <>
    {Object.keys(content).map((key) => (
      <Accordion key={key} sx={{ backgroundColor: "var(--bg-card-background)",borderRadius:"10%",marginBottom:"10px" }}>
        <AccordionSummary
          expandIcon={<SouthEastIcon style={{color:"var(--accent-color)"}} />}
          aria-controls={`panel-${key}-content`}
          id={`panel-${key}-header`}
        >
          <Typography component="span" sx={{ ...styles.subTitle,fontSize:"20px",fontWeight:"300" }}>
            {content[key].title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ ...styles.description }}>
            {content[key].description ? (
              <span dangerouslySetInnerHTML={{ __html: content[key].description }} />
            ) : (
              <span>No description available</span>
            )}
          </Typography>
        </AccordionDetails>
      </Accordion>
    ))}
  </>
  )
}