const Videos = (props) =>{
    console.log(props);
    const video = props.videoItem;
    
    let videoTitle = video.snippet.title
    if(videoTitle.length > 53){
        videoTitle = videoTitle.substring(0,50) + "...";
    }

    return(
        <div className="col-md-4">
            <a href={"https://youtube.com/watch?v="+video.id.videoId} className="watchVideo">
                <img src={video.snippet.thumbnails.medium.url} alt="videoimage" className="video img-fluid rounded"></img>
                <div className="videoName">{videoTitle}</div>
            </a>
            <a href={"https://youtube.com/channel/"+video.snippet.channelId} className="channelName">{video.snippet.channelTitle}</a>
        </div>
    )
}

export default Videos;