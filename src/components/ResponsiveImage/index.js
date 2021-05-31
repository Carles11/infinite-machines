import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './lazy.css'
document.addEventListener('DOMContentLoaded', () => {
  const imageObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const lazyImage = entry.target
        //  console.log('lazy loading ', lazyImage)
        lazyImage.src = lazyImage.dataset.src
      }
    })
  })
  const arr =
    document.querySelectorAll('img.lzy_img') &&
    document.querySelectorAll('video.lzy_img')
  arr.forEach(v => {
    imageObserver.observe(v)
  })
})

const ResponsiveImage = ({ src, srcRetina, alt, video, ...props }) => {
  const [zoomActive, setZoomActive] = useState(false)

  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: 'smooth',
  //   })
  // })

  // const alignToTop = {
  //   behavior: 'smooth',
  //   block: 'start',
  // }

  const handleZoom = e => {
    setZoomActive(!zoomActive)
    if (!zoomActive) {
      e.target.style.height = 'auto'
      e.target.style.width = '100vw'
      // e.target.scrollIntoView(alignToTop)
    } else {
      e.target.style.height = 'auto'
      e.target.style.width = '200vw'
    }
    setZoomActive(!zoomActive)

    // const elmnt =
    //   document.querySelectorAll('img.lzy_img') &&
    //   document.querySelectorAll('video.lzy_img')

    // elmnt.scrollIntoView()
  }

  return (
    <section className="gallery">
      <div className="container">
        <div className="grid">
          <div>
            <figure className="img-container">
              {video ? (
                <video
                  id={props.id}
                  className="video-item lzy_img"
                  autoPlay="autoplay"
                  muted="muted"
                  loop="loop"
                  playsInline="playsinline"
                  preload="metadata"
                  data-aos="fade-up"
                  controls
                  key={props.key}
                  alt={props.title}>
                  <source src={src} type="video/mp4" />
                </video>
              ) : (
                <img
                  id={props.id}
                  data-srcset={`${src} 1x, ${srcRetina} 2x`}
                  data-src={`${src}`}
                  srcSet={`${src} 1x, ${srcRetina} 2x`}
                  src={`${src}`}
                  alt={alt}
                  className="image-item lzy_img"
                  onClick={e => handleZoom(e)}
                  {...props}
                />
              )}
              <figcaption className="img-content">
                <h2 className="title">{props.title}</h2>
                <h3 className="category">{props.id}</h3>
              </figcaption>
              <span className="img-content-hover">
                <h2 className="title">{props.title}</h2>
                <h3 className="category">{props.id}</h3>
              </span>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}

ResponsiveImage.propTypes = {
  image: PropTypes.string,
  imageRetina: PropTypes.string,
  alt: PropTypes.string,
}

export default ResponsiveImage
