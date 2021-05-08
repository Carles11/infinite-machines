import React from 'react'
import { getUrlFromGif } from '../../helpers/utils'

import './redditList.css'

const RedditList = ({ reddits }) => {
  return (
    <div className="reddit-card">
      {reddits.map((reddit, key) =>
        reddit.url.match(/\.(gifv)$/) !== null ? (
          <div className="gif-items">
            <div class="object-and-details">
              {/* <img
                key={key}
                src={getUrlFromGif(reddit.url)}
                alt={reddit.title}
              /> */}
              <video autoplay key={key} controls alt={reddit.title}>
                <source src={getUrlFromGif(reddit.url)} type="video/mp4" />
              </video>

              <details>
                <summary role="button" aria-label="static reddit"></summary>
                <div class="object-and-details1">
                  <img
                    key={key}
                    src="https://res.cloudinary.com/dssldws2k/image/upload/v1592923278/JordiArjo/Backgrounds/roof-4057310_640.jpg"
                    alt={reddit.title}
                  />
                </div>
              </details>
              <h5>{reddit.title}</h5>
            </div>{' '}
          </div>
        ) : (
          <div className="image-items">
            <img key={key} src={reddit.url} alt={reddit.title} />
            <h5>{reddit.title}egegeg</h5>
          </div>
        ),
      )}
    </div>
  )
}

export default RedditList
