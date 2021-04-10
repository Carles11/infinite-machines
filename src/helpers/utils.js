export const getUrl = reddit => {
  const gifUrl = reddit.url.match(/\.(gifv)$/) != null
  let newGif
  newGif = gifUrl ? reddit.url.replace(/\.(gifv)($|\?)/, '.gif$2') : null

  return newGif
}

export const fetchReddits = handleReddits => {
  fetch('https://www.reddit.com/r/MachinePorn/.json?limit=100&after=t3_mfx5kk')
    .then(response => response.json())
    .then(data => handleReddits(data))
}
