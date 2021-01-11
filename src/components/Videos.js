const Videos = (props) =>{
    console.log(props);
    const video = props.videoItem;
    return(
        <div className="col-md-4">
            <div>
                <img src={video.snippet.thumbnails.medium.url} alt="videoimage" className="video img-fluid rounded"></img>
                <div>{video.snippet.title}</div>
            </div>
        </div>
    )
}

export default Videos;