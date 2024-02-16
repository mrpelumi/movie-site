import './navigation.styles.scss';
import { Outlet, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logoImg from '../../assets/logo-color.svg';
import HomeIcon from '@mui/icons-material/Home';
import MovieIcon from '@mui/icons-material/Movie';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import InfoIcon from '@mui/icons-material/Info';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CloseIcon from '@mui/icons-material/Close';

import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/')
  }

  const toggleButton = (event) => {
    setIsOpen(!isOpen);
  }

  return (
    <div className='main-container'>
      <div className='nav-container'>
        <div className='nav-image-container'>
          <img src={logoImg} alt="" onClick={goToHomePage} />
        </div>
        <div className='nav-link-container'>
          <div className='nav-link-item'>
            <HomeIcon />
            <Link style={{ textDecoration: 'none', color: '#2a3617' }} to='/'>Home</Link>
          </div>
          <div className='nav-link-item'>
            <MovieIcon />
            <Link style={{ textDecoration: 'none', color: '#2a3617' }} to='/review'>Reviews</Link>
          </div>
          <div className='nav-link-item'>
            <RssFeedIcon />
            <Link style={{ textDecoration: 'none', color: '#2a3617' }} to='/blog'>Blog</Link>
          </div>
          <div className='nav-link-item'>
            <InfoIcon />
            <Link style={{ textDecoration: 'none', color: '#2a3617' }} to='/about'>About Us</Link>
          </div>
        </div>
        <div className='nav-pipe'>
        </div>
        <div className='nav-social-container'>
          {/* Ensure the social links are correct */}
          <a className='nav-social-item' href="https://www.instagram.com/bhig_pelz"><InstagramIcon color='secondary' /></a>
          <a className='nav-social-item' href="https://www.x.com/pelcole"><XIcon color='action' /></a>
          <a className='nav-social-item' href="https://www.linkedin.com/in/pelumi-oguntola-b018a0145/"><LinkedInIcon color='primary' /></a>
        </div>
        {
          isOpen ? <div className='hamburger-icon-container' onClick={toggleButton}>
          <CloseIcon sx={{ color: '#627e35', fontSize: 44}} />
        </div> : <div className='hamburger-icon-container' onClick={toggleButton}>
          <MenuIcon sx={{ color: '#627e35', fontSize: 44}}/>
        </div>
        }
        
        {
          isOpen ? (<div className='menu-container'>
          <div className='menu-nav-container'>
            <div className='menu-nav-item' onClick={toggleButton}>
              <HomeIcon sx={{ color: '#627e35' }} />
              <Link style={{ textDecoration: 'none', color: '#2a3617' }} to='/'>Home</Link>
            </div>
            <div className='menu-nav-item' onClick={toggleButton}>
              <MovieIcon  sx={{ color: '#627e35' }} />
              <Link style={{ textDecoration: 'none', color: '#2a3617' }} to='/review'>Reviews</Link>
            </div>
            <div className='menu-nav-item' onClick={toggleButton}>
              <RssFeedIcon sx={{ color: '#627e35' }} />
              <Link style={{ textDecoration: 'none', color: '#2a3617' }} to='/blog'>Blog</Link>
            </div>
            <div className='menu-nav-item' onClick={toggleButton}>
              <InfoIcon sx={{ color: '#627e35' }} />
              <Link style={{ textDecoration: 'none', color: '#2a3617' }} to='/about'>About Us</Link>
            </div>
          </div>
          <hr />
          <div className='menu-social-container'>
            {/* Ensure the social links are correct */}
            <a className='nav-social-item' href="https://www.instagram.com/bhig_pelz"><InstagramIcon color='secondary' /></a>
            <a className='nav-social-item' href="https://www.x.com/pelcole"><XIcon color='action' /></a>
            <a className='nav-social-item' href="https://www.linkedin.com/in/pelumi-oguntola/"><LinkedInIcon color='primary' /></a>
          </div>
        </div> ) : null
        }
        
      </div>
      <Outlet />
    </div>
    
  )
}

export default Navigation