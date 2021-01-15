import axios from 'axios';

export function getYoutubeContentHook (axiosLoaded, loadData, isError, URL) {
    axios.get(URL) //test file
    .then(response=> {
        axiosLoaded(true)
        loadData(response.data)
    })
    .catch(axiosError =>{
        isError(axiosError)
    }
    )
}

export function getYoutubeContentMain (thisState, URL){
    axios.get(URL)
    .then(response=> {
        thisState.setState({
            isLoaded: true,
            data: response.data})
    })
    .catch(axiosError =>{
        thisState.setState({
            isLoaded:false,
            error: axiosError
        })
    })
}