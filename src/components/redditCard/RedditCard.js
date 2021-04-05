import React from 'react'
import { getUrl } from '../../helpers/utils.js'

import './redditCard.css'

const RedditCard = ({ reddits }) =>{
 
    const imgIsGif = reddits.map(reddit => reddit.url.includes('.gifv'))
    return (
        <div className="reddit-card">
       {reddits.map(reddit =>  
        <div>
            <img className={imgIsGif ? "gif" : ''} alt="reddit" width="100%" src={getUrl(reddit)} />
            <h5>{reddit.title}</h5>
        </div>)}
    </div>
    )
}

export default RedditCard