import React from 'react'
import './Footer.css'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';   
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import { IconButton } from '@material-ui/core';
function Footer() {
    return (
        <div className="footer">
           <IconButton className="active" size='large'>
               <HomeRoundedIcon />
           </IconButton>
           <IconButton size='large'>
               <SearchRoundedIcon/>
           </IconButton>
           <IconButton size='large'>
               <AddBoxRoundedIcon/>
           </IconButton>
           <IconButton size='large'>
               <FavoriteRoundedIcon/>
           </IconButton>
           <IconButton size='large'>
               <AccountCircleRoundedIcon/>
           </IconButton>
        </div>
    )
}

export default Footer
