// import { getMp4FromGifUrl } from '../../helpers/utils'
// import ResponsiveImage from '../ResponsiveImage/index.js'
// import Legend from '../legend/Legend'

// import './gallery.css'

import { ProGallery } from 'pro-gallery'
import 'pro-gallery/dist/statics/main.css'

function Gallery({ reddits }) {
  // Add your images here...
  const items = reddits

  // The options of the gallery (from the playground current state)
  const options = {
    galleryLayout: -1,
    isVertical: true,
    cubeImages: true,
    imageMargin: 0,
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
      items={items}
      options={options}
      container={container}
      eventsListener={eventsListener}
      scrollingElement={scrollingElement}
    />
  )
}

export default Gallery

// Enjoy using your new gallery!
// For more options, visit https://github.com/wix/pro-gallery

// Enjoy using your new gallery!
// For more options, visit https://github.com/wix/pro-gallery
// const Gallery = ({ reddits }) => {
//   const openFullScreen = id => {
//     const elem = document.getElementById(id)
//     if (document.fullscreenElement === null) {
//       if (elem.requestFullscreen) {
//         elem.requestFullscreen()
//       } else if (elem.webkitRequestFullscreen) {
//         /* Safari */
//         elem.webkitRequestFullscreen()
//       } else if (elem.msRequestFullscreen) {
//         /* IE11 */
//         elem.msRequestFullscreen()
//       }
//     } else {
//       closeFullScreen()
//     }
//   }

//   const closeFullScreen = () => {
//     if (document.exitFullscreen) {
//       document.exitFullscreen()
//     } else if (document.webkitExitFullscreen) {
//       /* Safari */
//       document.webkitExitFullscreen()
//     } else if (document.msExitFullscreen) {
//       /* IE11 */
//       document.msExitFullscreen()
//     }
//   }

//   return (
//     <div>
//       <h1>Gallery</h1>
//       <ul>
//         {reddits.map((reddit, key) => {
//           const fallBackUrl = reddit.preview?.reddit_video_preview?.fallback_url
//           return (
//             <div>
//               {reddit.preview?.reddit_video_preview?.is_gif ? (
//                 <li>
//                   <ResponsiveImage
//                     id={reddit.id}
//                     key={key}
//                     alt={reddit.title}
//                     src={fallBackUrl || getMp4FromGifUrl(reddit.url)}
//                     video
//                     onClick={e => openFullScreen(e.target.id)}
//                   />
//                 </li>
//               ) : (
//                 <li>
//                   <ResponsiveImage
//                     id={reddit.cid}
//                     key={key}
//                     src={reddit.curl}
//                     srcRetina={reddit.curl}
//                     alt={reddit.ctitle}
//                     onClick={e => openFullScreen(e.target.id)}
//                   />
//                 </li>
//               )}
//               <div className="legend-item">
//                 <Legend title={reddit.title} />
//               </div>
//             </div>
//           )
//         })}
//       </ul>
//     </div>
//   )
// }

// export default Gallery
