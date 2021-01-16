import React, { Component } from 'react';
import {getYoutubeContentMain} from '../functions/getYoutubeContent.js';
import Videos from './Videos'
import Error from './Error'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            data: {},
            error: null,
            playVideo: false,
            videoToPlay: null
        }

        this.clickHandler = this.clickHandler.bind(this);
    }

    
    componentDidMount(){
        //Youtube Endpoint
        //axios.get('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&type=video&order=viewCount&q=ReactJS%20Tutorial&key=' + process.env.REACT_APP_YOUTUBE_API_KEY)
        getYoutubeContentMain(this,'./test.json')
        document.addEventListener('touchstart', this.onTouchStart, { passive: true });
    }

    componentDidUpdate(prevProps){
        if(prevProps.urlSearch !== this.props.urlSearch){
            //Youtube Endpoint
            //axios.get('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&type=video&q=ReactJS%20Tutorial%20'+this.props.urlSearch+'&key=' + process.env.REACT_APP_YOUTUBE_API_KEY)
            this.setState({
                playVideo: false
            })
            getYoutubeContentMain(this,'./test2.json')
            console.log("API CALL BECAUSE OF UPDATE TO COMPONENT")
        }
    }

    clickHandler = (video) =>{
        this.setState({
            playVideo: !this.state.playVideo,
            videoToPlay: video
        })
    }

    render() {
        const vidArr = this.state.data.items;
        if(this.state.isLoaded && this.state.playVideo === false){
            return (
                <div className="container-fluid Main">
                    <div className="row">
                        {vidArr.slice(0,3).map((i) => <div className="col-md-4 cursor" onClick={() => this.clickHandler(i)} key={i.etag}><Videos videoItem = {i} key ={i.etag}/></div>)}
                    </div>
                    <div className="row">
                        {vidArr.slice(3,6).map((i) => <div className="col-md-4 cursor" onClick={() => this.clickHandler(i)} key={i.etag}><Videos videoItem = {i} key ={i.etag}/></div>)}
                    </div>
                    <div className="row">
                        {vidArr.slice(6,9).map((i) => <div className="col-md-4 cursor" onClick={() => this.clickHandler(i)} key={i.etag}><Videos videoItem = {i} key ={i.etag}/></div>)}
                    </div>
                    <div className="row">
                        {vidArr.slice(9,12).map((i) => <div className="col-md-4 cursor" onClick={() => this.clickHandler(i)} key={i.etag}><Videos videoItem = {i} key ={i.etag}/></div>)}
                    </div>                    
                </div>
            );
        } else if(this.state.playVideo){
            return (   
                <div className="container-fluid Main">
                    <button onClick={this.clickHandler} className="HTbuttons">back</button>
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe title={this.state.videoToPlay.id.videoId} className="embed-responsive-item" src={"https://youtube.com/embed/"+this.state.videoToPlay.id.videoId+"?autoplay=1"} allowFullScreen></iframe>
                    </div>
                    {"Test For Timeout"}
                    </div>
                
            );
        }else if(this.state.error){
            return (   
                <Error error={this.state.error.message} />
            );
        } else{
            return (
                <div className="container">test</div> );
                
        }
    }
}
 
export default Main;