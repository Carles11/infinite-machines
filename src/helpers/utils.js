export const getUrlFromGif = redditGifUrl => {
  let newGif
  newGif = redditGifUrl.replace(/\.(gifv)($|\?)/, '.gif$2')
  return newGif
}

export const fetchReddits = handleReddits => {
  fetch('https://www.reddit.com/r/MachinePorn/.json?limit=100&after=t3_mfx5kk')
    .then(response => response.json())
    .then(data => handleReddits(data))
}
