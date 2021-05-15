import React, { useState, useEffect } from 'react'
import { fetchReddits } from '../helpers/utils.js'

import RedditList from '../components/redditList/RedditList.js'

// import Loader from '../components/loader/Loader.js'
import './mainRedditter.css'

const MainRedditter = () => {
  const [reddits, setReddits] = useState([])

  useEffect(() => {
    fetchReddits(handleReddits)
  })

  const handleReddits = data => {
    let redditsArray = []
    if (data && data !== 'undefined') {
      data.data.children.map(redditPost => redditsArray.push(redditPost.data))
      setReddits(redditsArray)
    } else {
      return <h4>Loading Data...</h4>
    }
  }

  return (
    <div>
      <h1 className="main-title">Infinite Machines</h1>

      {reddits && reddits !== 'undefined' ? (
        <RedditList reddits={reddits} />
      ) : (
        // <Loader />
        <h4>"Loading..."</h4>
      )}
    </div>
  )
}

export default MainRedditter
