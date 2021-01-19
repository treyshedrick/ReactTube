import { Fragment } from "react";

const Videos = (props) =>{
    const video = props.videoItem;
    
    let videoTitle = video.snippet.title
    if(videoTitle.length > 53){
        videoTitle = videoTitle.substring(0,50) + "...";
    }

    //upload date
    let parsedTodaysDate = new Date();
    let parsedVideoDate = new Date(video.snippet.publishTime.slice(0,10));
    let dayDifference = (Math.floor((parsedTodaysDate - parsedVideoDate) / (1000 * 60 * 60 * 24)))

    let whenUploaded = "• today";
    
    if(dayDifference / 365 > 1){
        let differenceYear = Math.floor(dayDifference/365);
        whenUploaded = "• "+differenceYear.toString() + " years ago";
    } else if(dayDifference / 31 > 1){
        let differenceMonth = Math.floor(dayDifference/31);
        whenUploaded = "• "+differenceMonth.toString() + " months ago";
    } else if(dayDifference > 1){
        whenUploaded = "• "+dayDifference.toString() + " days ago";
    }
    
    if(parseInt(whenUploaded.charAt(2)) === 1){
        whenUploaded = whenUploaded.replace(/s/g, "");
    }

    return(
        <Fragment>
            <img src={video.snippet.thumbnails.medium.url} alt="videoimage" className="video img-fluid rounded cursor"></img>
            <div className="videoName">{videoTitle}</div>
            <a href={"https://youtube.com/channel/"+video.snippet.channelId} className="channelName">{video.snippet.channelTitle}</a>
            <div className="uploaded">{whenUploaded}</div>
        </Fragment>
    )
}

export default Videos;