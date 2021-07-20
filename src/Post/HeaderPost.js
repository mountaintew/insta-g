import React from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from '@material-ui/core';
import './HeaderPost.css';
function HeaderPost(props) {
    return (
        <div className="headerPost">
            <div className="headerPost__border">
                <Avatar src={props.userimage} className="headerPost__avatar"/>
            </div>
            <p>
                {props.username ? props.username : ''}
            </p>
            <IconButton>
                <MoreVertIcon/>
            </IconButton>
        </div>
    )
}

export default HeaderPost
