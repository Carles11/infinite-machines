import React, { useState, useEffect } from 'react'
import { getUrl } from '../../helpers/utils'

import './redditCard.css'

const RedditCard = ({ reddits }) => {
  const gifS = reddits.map(reddit => reddit.url.match(/\.(gifv)$/) != null)
  const picS = reddits.map(
    reddit => reddit.url.match(/\.(jpeg|jpg|gif|png)$/) != null,
  )

  console.log('PPPOPIPIPIPI', picS)
  console.log('AGAGAAGAGAG', gifS)
  const [redditPics, setRedditPics] = useState(picS)
  const [redditGifs, setRedditGifs] = useState(gifS)

  useEffect(() => {
    console.log('RErerer', redditPics)
    const imgIsGif = reddits.map(
      reddit => reddit.url.match(/\.(gifv)$/) != null,
    )
    if (imgIsGif.length) {
      setRedditGifs(reddits)
    } else {
      setRedditPics(reddits)
    }
  }, [reddits, redditPics])

  const renderImg = reddit => {
    const imgIsGif = reddit.url.match(/\.(gifv)$/) != null
    console.log('imgToGIf', imgIsGif)

    return !imgIsGif ? (
      <img alt="reddit" width="80%" src={reddit.url} />
    ) : (
      <img alt="reddit" width="100%" src={getUrl(reddit)} />
    )
  }

  return (
    <div className="reddit-card">
      <div className="object-and-details">
        {redditGifs.map(reddit => (
          <>
            <img src={reddit.url} alt={reddit.title} />
            <h5>{reddit.title}</h5>
          </>
        ))}
        <details>
          <summary role="button" aria-label="static image"></summary>
          <div class="object-and-details1">
            {redditPics.map(reddit => (
              <>
                <img src={redditPics.url} alt={reddit.title} />
                <h5>{reddit.title}</h5>
              </>
            ))}
          </div>
        </details>
      </div>
    </div>
  )
}

export default RedditCard
