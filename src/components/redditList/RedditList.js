import React from 'react'
import { getUrlFromGif } from '../../helpers/utils'
import ResponsiveImage from '../ResponsiveImage/index.js'
import './redditList.css'

const RedditList = ({ reddits }) => {
  return (
    <div className="reddit-card">
      {reddits.map((reddit, key) => {
        const fallBackUrl = reddit.preview.reddit_video_preview?.fallback_url
        return reddit.preview.reddit_video_preview?.is_gif ? (
          <div className="gif-items">
            <ResponsiveImage
              id={reddit.id}
              key={key}
              alt={reddit.title}
              src={fallBackUrl || getUrlFromGif(reddit.url)}
              video
            />
            {console.log('GIGIGIGIGFF', reddit)}
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

            <h5>{reddit.title}</h5>
          </div>
        )
      })}
    </div>
  )
}

export default RedditList
