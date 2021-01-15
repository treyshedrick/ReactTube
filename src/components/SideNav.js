import {useEffect, useState} from 'react';
import axios from 'axios';
import SideNavItems from './SideNavItems';

let SideNav = () =>{
    const[isLoaded,axiosLoaded] = useState(false);
    const[data,loadData] = useState(null);
    const[error,isError] = useState(null);

    useEffect( () => {
    axios.get('./test2.json') //test file
    .then(response=> {
        axiosLoaded(true)
        loadData(response.data)
    })
    .catch(axiosError =>{
        isError(axiosError)
    }
    )},[]);

    if(isLoaded && data != null){
    return(
        <div className="SideNav">
            <div className="playlistHeader">Popular Tutorial Playlists</div>
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