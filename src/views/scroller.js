import React, { useState, useEffect } from 'react';


const Scroller = () => {
   const [ reddits, setReddits ] = useState([])

   useEffect(()=> {
    fetch('https://www.reddit.com/r/MachinePorn/.json')
.then(response => response.json())
.then(
    data => handleReddits(data)
    )
})

   const handleReddits = (data) =>{
       let redditsArray = []
       console.log("DADADAD",data)
       data.data.children.map(redditPost =>redditsArray.push(redditPost.data))  
       setReddits(redditsArray)  
    }

    const getUrl = (reddit) => {
        const imgUrl = reddit.preview.images[0].resolutions[1].url
        let encoded = imgUrl.replace('amp;s', 's')
        let doubleEncoded = encoded.replace('amp;', '')
        let tripleEncoded = doubleEncoded.replace('amp;', '')
        return tripleEncoded
        }
    
    console.log("STATTTE", reddits)
  
    return (
    <div>
        <h1>Infinite Machines Images </h1>
       {reddits.map(reddit =>  
        <div>
            <h5>{reddit.title}</h5>
            <img alt="reddit" src={getUrl(reddit)} />
        </div>)}
    </div>
    )
} 

export default Scroller