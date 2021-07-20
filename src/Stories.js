import React, { useState } from 'react'
import { Avatar } from '@material-ui/core';
import './Stories.css'
import AddRoundedIcon from '@material-ui/icons/AddRounded';
function Stories() {

    const [stories, setStories] = useState([
        {
            "name": "Forza Horizon",
            "src": "https://www.logolynx.com/images/logolynx/31/31ee838d8ea6e18a6661a86d909e12f3.jpeg"
        },
        {
            "name": "Valorant",
            "src": "https://wallpaperaccess.com/full/4547519.jpg"
        },
        {
            "name": "League of Legends",
            "src": "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt629c00e7a21941b7/5f4d90ea891266279cd6d98b/league-client-update-header.jpg",
            "color": "#EF9A9A"
        },
        {
            "name": "DAYZ",
            "src": "https://fontmeme.com/images/Dayz-Game.jpg",
            "color": "#A1887F"
        },
        {
            "name": "Sims",
            "src": "https://www.playstationlifestyle.net/assets/uploads/2017/11/the-sims-4-title-1280x720.png",
            "color": "#FFA000"
        },
        {
            "name": "Among Us",
            "src": "https://static.wikia.nocookie.net/logopedia/images/3/39/Icons8-among-us.svg",
            "color": "#FF8A65"
        },
    ])
    return (
        <div className="stories">
            <div className="stories__list">
                <div className="stories__add">
                    <div className="stories__border">
                        <Avatar className="stories__avatar" src="https://avatars.githubusercontent.com/u/32102302?v=4">
                            <AddRoundedIcon fontSize="large" />
                        </Avatar>
                    </div>
                    <p>
                        
                        Your Story
                    </p>
                </div>
                {stories && stories.map((user) => (
                    <div className="stories__story" key={user.name}>
                        <div className="stories__border">
                            <Avatar
                                className="stories__avatar"
                                style={{ backgroundColor: user.color }}
                                src={user.src ? user.src : ''}
                            >
                                {user.icon ? user.icon : ""}
                            </Avatar>
                        </div>
                        <p>
                            {user.name.length > 8 ? <span style={{fontSize:'0.9rem', fontWeight:'600'}}>{user.name}</span> : user.name}
                        </p>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Stories
