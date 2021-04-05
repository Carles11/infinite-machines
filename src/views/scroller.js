import React, { useState, useEffect } from 'react';


const Scroller = () => {
   const [ reddits, setReddits ] = useState([])

   useEffect(()=> {
    fetch('https://www.reddit.com/r/MachinePorn/.json?limit=11')
.then(response => response.json())
.then(
    data => handleReddits(data)
    )
})

   const handleReddits = (data) =>{
       let redditsArray = []

       const machinePornPosts = data.data.children.map(post =>redditsArray.push(post.data))

       
       setReddits(redditsArray)

       console.log("machinePornPosts", machinePornPosts)
       console.log("redditsArray", redditsArray)
       console.log("STATTTE", reddits)
 
   }

  
    return (
    <div>
        <h1>Scroller page</h1>
        <h5>{reddits.map(reddit =>  <img alt="reddit" src={reddit.preview.images[0].resolutions[0].url} />)}</h5>
    </div>
    )
} 

export default Scroller