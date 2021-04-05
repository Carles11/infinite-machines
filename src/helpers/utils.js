

export const  getUrl = (reddit)=> {
    const imgUrl = reddit.url
    if(reddit.preview){
          let encoded = imgUrl.replace('amp;s', 's')
    
          let doubleEncoded = encoded.replace('amp;', '')
    let tripleEncoded = doubleEncoded.replace('amp;', '')
    return tripleEncoded}
    return imgUrl
    }

