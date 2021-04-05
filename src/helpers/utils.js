

export const  getUrl = (reddit)=> {
    let imgUrl = reddit.url
    const imgIsGif = reddit.url.includes('.gifv')
    if(!imgIsGif){
          let encoded = imgUrl.replace('amp;s', 's')
    
          let doubleEncoded = encoded.replace('amp;', '')
    let tripleEncoded = doubleEncoded.replace('amp;', '')
    return tripleEncoded
}else {
    const imgUrlToGif = reddit.url.replace('.gifv', '.gif')
    imgUrl = `https://gfycat.com/fetch/${imgUrlToGif}`
    return imgUrl
}
    }

    export const fetchReddits = (handleReddits) =>{
        fetch('https://www.reddit.com/r/MachinePorn/.json?limit=100&after=t3_mfx5kk')
        .then(response => response.json())
        .then(
            data => handleReddits(data)
            )
    }
