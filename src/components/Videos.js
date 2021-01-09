const Videos = (props) =>{
    console.log(props);
    const video = props.videoItem;
    return(
        <div className="col-lg-4">
            <img src={video.snippet.thumbnails.medium.url} alt="videoimage"></img>
            <div>{video.snippet.title}</div>
        </div>
    )
}

export default Videos;


