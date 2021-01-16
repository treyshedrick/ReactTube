let VideoPlayer = (props) =>{
    let playVideo = props.videoItem
    console.log(playVideo.id.videoId)
    return(
    <div className="videoPlayer">
        <div className="embed-responsive embed-responsive-16by9">
            <iframe title={playVideo.id.videoId} className="embed-responsive-item" src={"https://youtube.com/embed/"+playVideo.id.videoId} allowFullScreen></iframe>
        </div>
    </div>
    )
}

export default VideoPlayer