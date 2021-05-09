export const fetchReddits = handleReddits => {
  fetch('https://www.reddit.com/r/MachinePorn/.json')
    .then(response => response.json())
    .then(data => handleReddits(data))
}

export const getUrlFromGif = redditGifUrl => {
  let newGif
  newGif =
    redditGifUrl.match(/\.(gifv)$/) !== null
      ? redditGifUrl.replace(/\.(gifv)($|\?)/, '.mp4')
      : redditGifUrl

  return newGif
}
