import React from 'react'
import { getMp4FromGifUrl } from '../../helpers/utils'
import ResponsiveImage from '../ResponsiveImage/index.js'
import Legend from '../legend/Legend'
import './redditList.css'

const RedditList = ({ reddits }) => {
  const openFullScreen = id => {
    const elem = document.getElementById(id)
    if (document.fullscreenElement === null) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen()
      } else if (elem.webkitRequestFullscreen) {
        /* Safari */
        elem.webkitRequestFullscreen()
      } else if (elem.msRequestFullscreen) {
        /* IE11 */
        elem.msRequestFullscreen()
      }
    } else {
      closeFullScreen()
    }
  }

  const closeFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.webkitExitFullscreen) {
      /* Safari */
      document.webkitExitFullscreen()
    } else if (document.msExitFullscreen) {
      /* IE11 */
      document.msExitFullscreen()
    }
  }
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
                onClick={e => openFullScreen(e.target.id)}
              />
            ) : (
              <ResponsiveImage
                id={reddit.id}
                key={key}
                className="image-item"
                src={reddit.url}
                srcRetina={reddit.url}
                alt={reddit.title}
                onClick={e => openFullScreen(e.target.id)}
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
