import './footer.styles.scss';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
  return (
    <div className='footer'>
      <span>Pelumi Ltd</span>
      <div className='copyright-container'>
        <CopyrightIcon />
        <span>Copyright 2024</span>
      </div>
      
    </div>
  )
}

export default Footer;