let SideNavItems = (props) =>{
    let playlistTitle = props.playlist.snippet.title.replace(/&amp;/g, "&")

    if( playlistTitle.length > 33){
        playlistTitle = playlistTitle.substring(0,30) + "...";
    }

    return(
        <a className="sideNavLink" href={"https://www.youtube.com/playlist?list=" + props.playlist.id.playlistId}>
            <div className="sideNavItem">
                <div className="playlistLink">{playlistTitle}</div>
                <div ><span className="playlistChannel">{props.playlist.snippet.channelTitle}</span></div>
            </div>
        </a>
    )
}

export default SideNavItems