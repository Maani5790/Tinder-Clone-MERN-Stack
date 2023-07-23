import React from 'react';
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';

const Header = () => {
  return (
     <>
    <div className='header'>
     <IconButton>
     <PersonIcon fontSize="large" className='header__icon' />
     </IconButton>
     <img
       className='header_logo' src="https://www.logo.wine/a/logo/Tinder_(app)/Tinder_(app)-Flame-Logo.wine.svg" alt='logo'
     />
     <ForumIcon fontSize='large' className='header__icon' />
     </div>
     </>
  )
}

export default Header