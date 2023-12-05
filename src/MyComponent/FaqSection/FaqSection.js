/* eslint-disable import/no-anonymous-default-export */
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './FaqSection.css'

export default () => {
    return <div>
    <div>
       <h1 className='faq-title'>FAQs</h1>
    </div>
        <div className='faq-container'>
        <Accordion className='accordion-one'>
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon style={{ color:'var(--css-primary)', fontSize: '3rem'}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{backgroundColor: 'black', borderRadius: '5px'}}
        >
          <Typography style={{color: 'white', fontSize: '20px', fontWeight: '500', fontFamily: 'Poppins'}}>Is QTify free to use?</Typography>
        </AccordionSummary>
        <AccordionDetails style={{borderRadius: '5px'}}>
          <Typography style={{fontSize: '20px', fontWeight: '500', fontFamily: 'Poppins'}}>
          Yes! It is 100% free, and has 0% ads!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br/>
        <Accordion className='accordion-two'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color:'var(--css-primary)', fontSize: '3rem'}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{backgroundColor: 'black', borderRadius: '5px'}}
        >
          <Typography style={{color: 'white', fontSize: '20px', fontWeight: '500', fontFamily: 'Poppins'}}>Can I download and listen to songs offline?</Typography>
        </AccordionSummary>
        <AccordionDetails style={{borderRadius: '5px'}}>
          <Typography style={{fontSize: '20px', fontWeight: '500', fontFamily: 'Poppins'}}>
          Sorry, unfortunately we don't provide the service to download any songs.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
    </div>
}