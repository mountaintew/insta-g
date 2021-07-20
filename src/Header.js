import React from 'react';
import DynamicFeedRoundedIcon from '@material-ui/icons/DynamicFeedRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import SportsEsportsRoundedIcon from '@material-ui/icons/SportsEsportsRounded';
import './Header.css'
import { IconButton } from '@material-ui/core';
function Header(props) {
    return (
        <div className="header">
            <img src={"logo.png"} alt="Logo" className="header__logo" />
            <div className="header__right">
                <IconButton>
                    <SportsEsportsRoundedIcon/>
                </IconButton>
                <IconButton>
                    <DynamicFeedRoundedIcon />
                </IconButton>
                <IconButton>
                    <SendRoundedIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Header
