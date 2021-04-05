import React, { useState, useEffect } from 'react';

import RedditCard from '../components/redditCard/RedditCard.js'

const MainRedditter = () => {
   const [ reddits, setReddits ] = useState([])

   useEffect(()=> {
    fetch('https://www.reddit.com/r/MachinePorn/.json?limit=100&after=t3_mfx5kk')
.then(response => response.json())
.then(
    data => handleReddits(data)
    )
})

   const handleReddits = (data) =>{
       let redditsArray = []
       data.data.children.map(redditPost =>redditsArray.push(redditPost.data))  
       setReddits(redditsArray)  
    }

    

    return (
    <div>
     <RedditCard reddits={reddits} />
    </div>
    )
} 

export default MainRedditter