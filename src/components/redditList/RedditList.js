import React from 'react'
import { getUrlFromGif } from '../../helpers/utils'
import ResponsiveImage from '../ResponsiveImage/index.js'
import './redditList.css'

const RedditList = ({ reddits }) => {
  return (
    <div className="reddit-card">
      {reddits.map((reddit, key) =>
        reddit.url.match(/\.(gifv)$/) !== null ? (
          <div className="gif-items">
            <ResponsiveImage
              id={key}
              key={key}
              alt={reddit.title}
              src={getUrlFromGif(reddit.url)}
              video
            />
            <h5>{reddit.title}</h5>
          </div>
        ) : (
          <div>
            <ResponsiveImage
              className="image-item"
              key={key}
              src={reddit.url}
              srcRetina={reddit.url}
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
