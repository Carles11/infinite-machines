import React from 'react'

import { ProGallery } from 'pro-gallery'
import 'pro-gallery/dist/statics/main.css'

export default function Gallery(reddits) {
  // Add your images here...
  // const items = [{ reddits }]

  // The options of the gallery (from the playground current state)
  const options = {
    galleryLayout: 0,
    isVertical: true,
    collageDensity: '0.5',
    imageMargin: 2,
    videoPlay: 'auto',
    // hoveringBehaviour: 'NEVER_SHOW',
    // imageHoverAnimation: 'SHRINK',
    itemBorderRadius: 11,
    allowContextMenu: true,
  }

  // The size of the gallery container. The images will fit themselves in it
  const container = {
    width: window.innerWidth,
    height: window.innerHeight,
  }

  // The eventsListener will notify you anytime something has happened in the gallery.
  const eventsListener = (eventName, eventData) =>
    console.log({ eventName, eventData })

  // The scrollingElement is usually the window, if you are scrolling inside another element, suplly it here
  const scrollingElement = window

  return (
    <ProGallery
      items={reddits}
      options={options}
      container={container}
      eventsListener={eventsListener}
      scrollingElement={scrollingElement}
    />
  )
}
