export const fetchReddits = handleReddits => {
  fetch('https://www.reddit.com/r/MachinePorn/.json?limit=1000')
    .then(response => response.json())
    .then(data => handleReddits(data))
}

export const getMp4FromGifUrl = redditGifUrl => {
  let newGif
  newGif =
    redditGifUrl.match(/\.(gifv)$/) !== null
      ? redditGifUrl.replace(/\.(gifv)($|\?)/, '.mp4')
      : redditGifUrl

  return newGif
}
