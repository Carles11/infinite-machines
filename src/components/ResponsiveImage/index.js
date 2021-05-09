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
  const arr = document.querySelectorAll('img.lzy_img')
  arr.forEach(v => {
    imageObserver.observe(v)
  })
})

const ResponsiveImage = ({ image, imageRetina, alt, lazyImg, ...props }) =>
  !lazyImg ? (
    <img
      srcSet={`${image} 1x, ${imageRetina} 2x`}
      src={`${image}`}
      alt={alt}
      {...props}
    />
  ) : (
    <img
      data-srcset={`${image} 1x, ${imageRetina} 2x`}
      data-src={`${image}`}
      srcSet={`${image} 1x, ${imageRetina} 2x`}
      src={`${image}`}
      alt={alt}
      className="lazy"
      {...props}
    />
  )

ResponsiveImage.propTypes = {
  image: PropTypes.string,
  imageRetina: PropTypes.string,
  alt: PropTypes.string,
}

export default ResponsiveImage
