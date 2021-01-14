let SideNavItems = (props) =>{
    let playlistTitle = props.playlist.snippet.title.replace(/&amp;/g, "&")

    if( playlistTitle.length > 33){
        playlistTitle = playlistTitle.substring(0,30) + "...";
    }

    return(
        <div className="playlistItem">
            <div><a className="playlistLink" href={"https://www.youtube.com/playlist?list=" + props.playlist.id.playlistId}>{playlistTitle}</a></div>
            <div ><span className="playlistChannel">{props.playlist.snippet.channelTitle}</span></div>
        </div>
    )
}

export default SideNavItems