import React from 'react'
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import BookmarkBorderRoundedIcon from '@material-ui/icons/BookmarkBorderRounded';
import './FooterPost.css'
import { IconButton } from '@material-ui/core';
function FooterPost(props) {
    return (
        <div className="footerpost">
            <div className="footerpost__actions">
                <div className="footerpost__actions__common">
                    <IconButton>
                        <FavoriteBorderRoundedIcon />
                    </IconButton>
                    <IconButton>
                        <ChatBubbleOutlineRoundedIcon />
                    </IconButton>
                    <IconButton>
                        <ShareOutlinedIcon />
                    </IconButton>
                </div>


                <div className="footerpost__actions__save">
                    <IconButton>
                        <BookmarkBorderRoundedIcon />
                    </IconButton>
                </div>
            </div>
            <div className="footerpost__data">
                <p className="footerpost__data__likes">{props.likes} Likes</p>
                <p className="footerpost__data__user">
                    {props.username}
                    <span className="footerpost__data__caption">
                        {props.caption}
                    </span>
                </p>
                <p className="footerpost__data__comments">
                    View Comments...
                </p>
            </div>
        </div>
    )
}

export default FooterPost
