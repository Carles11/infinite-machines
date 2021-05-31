import React, { useState, useEffect } from 'react'
import { fetchReddits } from '../helpers/utils.js'

import RedditList from '../components/redditList/RedditList.js'
import TopMenu from '../components/topMenu/TopMenu'
import MainMenu from '../components/mainMenu/MainMenu'
// import Loader from '../components/loader/Loader.js'
import './mainRedditter.css'

const MainRedditter = () => {
  const [reddits, setReddits] = useState([])
  const [itemsShown, setItemsShown] = useState('')

  useEffect(() => {
    fetchReddits(handleReddits)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemsShown])

  const handleReddits = data => {
    let redditsArray = []
    if (data && data !== 'undefined' && itemsShown === 'photos') {
      data.data.children
        .filter(reddit => reddit.data.url.match(/\.(jpeg|jpg|png)$/) != null)
        .map(redditPost => redditsArray.push(redditPost.data))
      setReddits(redditsArray)
    } else if (data && data !== 'undefined' && itemsShown === 'gifs') {
      data.data.children
        .filter(reddit => reddit.data.url.match(/\.(gifv|gif|mp4)$/) != null)
        .map(redditPost => redditsArray.push(redditPost.data))
      setReddits(redditsArray)
    } else if (data && data !== 'undefined') {
      data.data.children.map(redditPost => redditsArray.push(redditPost.data))
      setReddits(redditsArray)
    } else return
  }
  return (
    <div>
      <MainMenu />
      <TopMenu setItemsShown={setItemsShown} />
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
