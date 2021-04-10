import React, { useState, useEffect } from 'react'
import { getUrlFromGif } from '../../helpers/utils'

import './redditCard.css'

const RedditCard = ({ reddits }) => {
  const [redditPics] = useState([])
  const [redditGifs] = useState([])
  const [picIsGif, setPicIsGif] = useState(false)

  useEffect(() => {
    reddits.map(reddit =>
      reddit.url.match(/\.(gifv)$/) != null
        ? redditGifs.push(reddit) && setPicIsGif(true)
        : reddit.url.match(/\.(jpeg|jpg|png)$/) != null
        ? redditPics.push(reddit)
        : null,
    )
  }, [reddits, redditGifs, redditPics])

  return (
    <div className="reddit-card">
      <div className="object-and-details">
        {picIsGif
          ? redditGifs.map(reddit => (
              <>
                <img src={getUrlFromGif(reddit.url)} alt={reddit.title} />
                <h5>{reddit.title}</h5>
                <details>
                  <summary role="button" aria-label="static image"></summary>
                  <div class="object-and-details1">
                    {redditPics.map(reddit => (
                      <>
                        <img
                          src="https://res.cloudinary.com/dssldws2k/image/upload/v1592923278/JordiArjo/Backgrounds/roof-4057310_640.jpg"
                          alt={reddit.title}
                        />
                        <h5>{reddit.title}</h5>
                      </>
                    ))}
                  </div>
                </details>
              </>
            ))
          : redditPics.map(reddit => (
              <>
                <img src={reddit.url} alt={reddit.title} />
                <h5>{reddit.title}</h5>
              </>
            ))}
      </div>
    </div>
  )
}

export default RedditCard
