import React from 'react'
import { getUrlFromGif } from '../../helpers/utils'

import './redditCard.css'

const RedditCard = ({ reddits }) => {
  return (
    <div className="reddit-card">
      {reddits.map((reddit, key) =>
        reddit.url.match(/\.(gifv)$/) != null ? (
          <>
            <img key={key} src={getUrlFromGif(reddit.url)} alt={reddit.title} />
            <h5>{reddit.title}</h5>
            <details>
              <summary role="button" aria-label="static reddit"></summary>
              <div class="object-and-details1">
                <>
                  <img
                    key={key}
                    src="https://res.cloudinary.com/dssldws2k/image/upload/v1592923278/JordiArjo/Backgrounds/roof-4057310_640.jpg"
                    alt={reddit.title}
                  />
                  <h5>{reddit.title} </h5>
                </>
              </div>
            </details>
          </>
        ) : (
          <>
            <img key={key} src={reddit.url} alt={reddit.title} />
            <h5>{reddit.title}egegeg</h5>
          </>
        ),
      )}
    </div>
  )
}

export default RedditCard
