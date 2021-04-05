import React from 'react'
import { getUrl } from '../../helpers/utils.js'

const RedditCard = ({ reddits }) =>{
  
    return (
        <div>
        <h1>Infinite Machines Images </h1>
       {reddits.map(reddit =>  
        <div>
            <img alt="reddit" width="100%" src={getUrl(reddit)} />
            <h5>{reddit.title}</h5>
        </div>)}
    </div>
    )
}

export default RedditCard