import React from 'react'
import './ImagePost.css'
function ImagePost(props) {
    return (
        <div className="imagepost">
            <img  src={props.img_post} alt="ImagePost" className="imagepost__image"/>
        </div>
    )
}

export default ImagePost
