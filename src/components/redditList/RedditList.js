import React from 'react'
import { getUrlFromGif } from '../../helpers/utils'
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
              <div className="gif-items">
                <ResponsiveImage
                  id={reddit.id}
                  key={key}
                  alt={reddit.title}
                  src={fallBackUrl || getUrlFromGif(reddit.url)}
                  video
                />
              </div>
            ) : (
              <div>
                <ResponsiveImage
                  id={reddit.id}
                  key={key}
                  className="image-item"
                  src={reddit.url}
                  srcRetina={reddit.url}
                  alt={reddit.title}
                />
              </div>
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
