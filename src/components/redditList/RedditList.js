import React from 'react'
import { getMp4FromGifUrl } from '../../helpers/utils'
import ResponsiveImage from '../ResponsiveImage/index.js'
import Legend from '../legend/Legend'
import './redditList.css'

const RedditList = ({ reddits }) => {
  return (
    <div className="reddit-card">
      {reddits.map((reddit, key) => {
        const fallBackUrl = reddit.preview?.reddit_video_preview?.fallback_url
        return (
          <div key={`r_${key}_${reddit.id}`} className="item-container">
            {reddit.preview?.reddit_video_preview?.is_gif ? (
              <ResponsiveImage
                id={reddit.id}
                key={key}
                alt={reddit.title}
                src={fallBackUrl || getMp4FromGifUrl(reddit.url)}
                className="video-item"
                video
              />
            ) : (
              <ResponsiveImage
                id={reddit.id}
                key={key}
                className="image-item"
                src={reddit.url}
                srcRetina={reddit.url}
                alt={reddit.title}
              />
            )}
            <div className="legend-item">
              <Legend title={reddit.title} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default RedditList
