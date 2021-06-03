// import React from 'react'
// import { getMp4FromGifUrl } from '../../helpers/utils'
// import ResponsiveImage from '../ResponsiveImage/index.js'
// import Legend from '../legend/Legend'
// import './redditContainer.css'

// const RedditContainer = ({ reddits }) => {
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
//     <div className="reddit-card">
//       {reddits.map((reddit, key) => {
//         const random_boolean = Math.random() < 0.5
//         console.log('ararararar', random_boolean)

//         const fallBackUrl = reddit.preview?.reddit_video_preview?.fallback_url

//         return (
//           <div
//             key={`r_${key}_${reddit.id}`}
//             className={random_boolean ? 'item-container column-span-12 ' : ''}>
//             {reddit.preview?.reddit_video_preview?.is_gif ? (
//               <ResponsiveImage
//                 id={reddit.id}
//                 key={key}
//                 alt={reddit.title}
//                 src={fallBackUrl || getMp4FromGifUrl(reddit.url)}
//                 video
//                 onClick={e => openFullScreen(e.target.id)}
//               />
//             ) : (
//               <div
//                 className={
//                   random_boolean
//                     ? ''
//                     : 'flex-row item-container column-span-12 redditContainer'
//                 }>
//                 <>
//                   <ResponsiveImage
//                     id={random_boolean ? reddit.id : reddits[key]?.id}
//                     key={key}
//                     src={random_boolean ? reddit.id : reddits[key]?.url}
//                     srcRetina={random_boolean ? reddit.id : reddits[key]?.url}
//                     alt={random_boolean ? reddit.id : reddits[key]?.title}
//                     onClick={e => openFullScreen(e.target.id)}
//                   />
//                 </>
//                 <>
//                   !random_boolean &&
//                   <ResponsiveImage
//                     id={reddits[key + 21]?.id}
//                     key={key}
//                     src={reddits[key + 21]?.url}
//                     srcRetina={reddits[key + 21]?.url}
//                     alt={reddits[key + 21]?.title}
//                     onClick={e => openFullScreen(e.target.id)}
//                   />
//                   <div className="legend-item-in-row">
//                     <Legend title={reddits[key + 21]?.title} />
//                   </div>
//                 </>
//               </div>
//             )}
//             <div className="legend-item">
//               <Legend title={reddit.title} />
//             </div>
//           </div>
//         )
//       })}
//     </div>
//   )
// }

// export default RedditContainer
