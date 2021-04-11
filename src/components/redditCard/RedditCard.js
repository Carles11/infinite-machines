import React, { useState, useEffect } from 'react'
import { getUrlFromGif } from '../../helpers/utils'

import './redditCard.css'

const RedditCard = ({ reddits }) => {
  const [redditPics] = useState([])
  const [redditGifs] = useState([])
  const [picIsGif, setPicIsGif] = useState('')

  useEffect(() => {
    reddits.map((reddit, key) =>
      reddit.url.match(/\.(gifv)$/) != null
        ? redditGifs.push(reddit) && handlePicIsGif(true)
        : reddit.url.match(/\.(jpeg|jpg|png)$/) != null
        ? redditPics.push(reddit) && handlePicIsGif(false)
        : null,
    )
    console.log('PAPAPAPA', redditPics)
    console.log('popopopopop', redditGifs)
  })

  const handlePicIsGif = isGif => {
    setPicIsGif(isGif)
    console.log('PIPIPIPI', picIsGif)
  }
  return (
    <div className="reddit-card">
      <div className="object-and-details">
        {picIsGif
          ? redditGifs.map((reddit, key) => (
              <>
                <img
                  key={key}
                  src={getUrlFromGif(reddit.url)}
                  alt={reddit.title}
                />
                <h5>{reddit.title}</h5>
                <details>
                  <summary role="button" aria-label="static image"></summary>
                  <div class="object-and-details1">
                    {redditPics.map((reddit, key) => (
                      <>
                        <img
                          key={key}
                          src="https://res.cloudinary.com/dssldws2k/image/upload/v1592923278/JordiArjo/Backgrounds/roof-4057310_640.jpg"
                          alt={reddit.title}
                        />
                        <h5>{reddit.title} </h5>
                      </>
                    ))}
                  </div>
                </details>
              </>
            ))
          : redditPics.map((reddit, key) => (
              <>
                <img key={key} src={reddit.url} alt={reddit.title} />
                <h5>{reddit.title}egegeg</h5>
              </>
            ))}
      </div>
    </div>
  )
}

export default RedditCard
