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
           <IconButton>
               <HomeRoundedIcon />
           </IconButton>
           <IconButton>
               <SearchRoundedIcon/>
           </IconButton>
           <IconButton>
               <AddBoxRoundedIcon/>
           </IconButton>
           <IconButton >
               <FavoriteRoundedIcon/>
           </IconButton>
           <IconButton>
               <AccountCircleRoundedIcon/>
           </IconButton>
        </div>
    )
}

export default Footer
