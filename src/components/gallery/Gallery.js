import { getMp4FromGifUrl } from '../../helpers/utils'
import ResponsiveImage from '../ResponsiveImage/index.js'
import Legend from '../legend/Legend'

import './gallery.css'

const Gallery = ({ reddits }) => {
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
    <div>
      <h1>Gallery</h1>
      {reddits.map((reddit, key) => {
        const fallBackUrl = reddit.preview?.reddit_video_preview?.fallback_url
        return (
          <ul>
            {reddit.preview?.reddit_video_preview?.is_gif ? (
              <li>
                <ResponsiveImage
                  id={reddit.id}
                  key={key}
                  alt={reddit.title}
                  src={fallBackUrl || getMp4FromGifUrl(reddit.url)}
                  video
                  onClick={e => openFullScreen(e.target.id)}
                />
              </li>
            ) : (
              <li>
                <ResponsiveImage
                  id={reddit.cid}
                  key={key}
                  src={reddit.curl}
                  srcRetina={reddit.curl}
                  alt={reddit.ctitle}
                  onClick={e => openFullScreen(e.target.id)}
                />
              </li>
            )}
            <div className="legend-item">
              <Legend title={reddit.title} />
            </div>
          </ul>
        )
      })}
    </div>
  )
}

export default Gallery
