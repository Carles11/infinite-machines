import React from 'react'
import { getUrlFromGif } from '../../helpers/utils'

import './redditList.css'

const RedditList = ({ reddits }) => {
  return (
    <div className="reddit-card">
      {reddits.map((reddit, key) =>
        reddit.url.match(/\.(gifv)$/) !== null ? (
          <div className="gif-items">
            <video
              id={key}
              className="video-item"
              autoplay="autoplay"
              muted="muted"
              loop="loop"
              playsinline="playsinline"
              preload="metadata"
              data-aos="fade-up"
              controls
              key={key}
              alt={reddit.title}>
              <source src={getUrlFromGif(reddit.url)} type="video/mp4" />
            </video>

            <h5>{reddit.title}</h5>
          </div>
        ) : (
          <div>
            <img
              className="image-item"
              key={key}
              src={reddit.url}
              alt={reddit.title}
            />
            <h5>{reddit.title}egegeg</h5>
          </div>
        ),
      )}
    </div>
  )
}

export default RedditList
