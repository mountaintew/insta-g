import React, { useState } from 'react'
import './Feed.css'
import HeaderPost from './Post/HeaderPost'
import ImagePost from './Post/ImagePost'
import FooterPost from './Post/FooterPost'
import './Feed.css'
function Feed() {
    const [feed, setFeed] = useState([
        {
            "user": "Valorant",
            "user_img": "https://wallpaperaccess.com/full/4547519.jpg",
            "img_post": "https://pbs.twimg.com/media/E5TLtcAWQAI3vS6.jpg:large",
            "likes": "50,448",
            "caption": `Share your lore fan theories about KAY/O and let’s see if you get close to decrypting what truly makes this robot tick.`
        },
        {
            "user": "Forza Horizon",
            "user_img": "https://www.logolynx.com/images/logolynx/31/31ee838d8ea6e18a6661a86d909e12f3.jpeg",
            "img_post": "https://www.windowscentral.com/sites/wpcentral.com/files/styles/large/public/field/image/2021/06/forza-horizon-5-store-screenshot-06.jpg",
            "likes": "75,467",
            "caption": `Did you want a Forza Horizon with more cars at launch than ever before? Then we have fantastic news.`
        },
        {
            "user": "League of Legends",
            "user_img": "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt629c00e7a21941b7/5f4d90ea891266279cd6d98b/league-client-update-header.jpg",
            "img_post": "https://pbs.twimg.com/media/E6cAsipUcAAf2Ms.jpg:large",
            "likes": "62,042",
            "caption": `With an insatiable appetite, the Mists devour a god’s power. Rise of the Sentinels Chapter II, available now.`
        }

    ])

    return (
        <div className="feed">
            {feed && feed.map((post) => (
                <div className="post" key={post.img_post + post.user}>
                    {/* Header Post */}
                    <HeaderPost userimage={post.user_img} username={post.user} />
                    {/* Image Post */}
                    <ImagePost img_post={post.img_post} />
                    {/* Footer Post */}
                    <FooterPost likes={post.likes} caption={post.caption} username={post.user} />
                </div>
            ))}
            <div className="feed__empty">
                <img src="box.svg"/>
                <p>That's for now. <br/> Work in progress.</p>
            </div>
        </div>
    )
}

export default Feed
