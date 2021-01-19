let VideoPlayer = (props) =>{
    let playVideo = props.videoItem
    let publishedOn = new Date(playVideo.snippet.publishTime.slice(0,10))
    publishedOn = publishedOn.toLocaleDateString('en-US').replace(/\//g, ", ").replace(','," ");

    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']

    for(let x=0;x<months.length;x++){
        if(parseInt(publishedOn.charAt(1)) === 0){
            publishedOn = '• Oct' + publishedOn.slice(2,12)

        } else if(parseInt(publishedOn.charAt(1)) === 1){
            publishedOn = '• Nov' + publishedOn.slice(2,12)

        } else if(parseInt(publishedOn.charAt(1)) === 2){
            publishedOn = '• Dec' + publishedOn.slice(2,12)
            
        } else if(x+1 === parseInt(publishedOn.charAt(0))){
            publishedOn = "• "+months[x] + publishedOn.slice(1,11)
        }
    }

    return(
    <div className="videoPlayer">
        <div className="embed-responsive embed-responsive-16by9">
            <iframe title={playVideo.id.videoId} className="embed-responsive-item" src={"https://youtube.com/embed/"+playVideo.id.videoId} allowFullScreen></iframe>
        </div>
        <div>{playVideo.snippet.title}</div>
        <div>{publishedOn}</div>
        <a href={"https://youtube.com/channel/"+playVideo.snippet.channelId} className="channelName">{playVideo.snippet.channelTitle}</a>
        <div>{playVideo.snippet.description}</div>
    </div>
    )
}

export default VideoPlayer