import {useEffect, useState} from 'react';
import {getYoutubeContentHook} from '../functions/getYoutubeContent.js';
import SideNavItems from './SideNavItems';

let SideNav = () =>{
    const[isLoaded,axiosLoaded] = useState(false);
    const[data,loadData] = useState(null);
    const[error,isError] = useState(null);

    useEffect( () => {
        getYoutubeContentHook(axiosLoaded, loadData, isError, './test2.json');
    },[]);

    if(isLoaded && data != null){
    return(
        <div className="SideNav">
            <div className="sideNavHeader"><a href="https://reactjs.org/" className="sideNavLink">View React Documentation</a></div>
            <div className="sideNavHeader">Popular Tutorial Playlists</div>
            {data.items.map((i) => <SideNavItems playlist={i} key={i.etag}/>)}
        </div>
    )
    }else if(error){
        return(
            <div>{error.message}</div>
        )
    }else {
        return(
            <div></div>
        )
    }
}
export default SideNav