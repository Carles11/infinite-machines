import React from 'react'
import PropTypes from 'prop-types'

// import './lazy.css'
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

const ResponsiveImage = ({ src, srcRetina, alt, video, ...props }) =>
  video ? (
    <video
      id={props.id}
      className="video-item lzy_img"
      autoplay="autoplay"
      muted="muted"
      loop="loop"
      playsinline="playsinline"
      preload="metadata"
      data-aos="fade-up"
      controls
      key={props.key}
      alt={props.title}>
      <source src={src} type="video/mp4" />
    </video>
  ) : (
    <img
      data-srcset={`${src} 1x, ${srcRetina} 2x`}
      data-src={`${src}`}
      srcSet={`${src} 1x, ${srcRetina} 2x`}
      src={`${src}`}
      alt={alt}
      className="lzy_img"
      {...props}
    />
  )

ResponsiveImage.propTypes = {
  image: PropTypes.string,
  imageRetina: PropTypes.string,
  alt: PropTypes.string,
}

export default ResponsiveImage
