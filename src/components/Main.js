import React, { Component } from 'react';
import {getYoutubeContentMain} from '../functions/getYoutubeContent.js';
import Videos from './Videos'
import Error from './Error'
import VideoPlayer from './VideoPlayer.js';

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
        getYoutubeContentMain(this,'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&type=video&order=viewCount&q=ReactJS%20Tutorial&key=' + process.env.REACT_APP_YOUTUBE_API_KEY)

        //test.json used for testing
        //getYoutubeContentMain(this,'./test.json')
    }

    componentDidUpdate(prevProps){
        if(prevProps.urlSearch !== this.props.urlSearch){
            //Youtube Endpoint
            getYoutubeContentMain(this,'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&type=video&q=ReactJS%20Tutorial%20'+this.props.urlSearch+'&key=' + process.env.REACT_APP_YOUTUBE_API_KEY)

            //test.json used for testing
            //getYoutubeContentMain(this,'./test2.json')
            this.setState({
                playVideo: false
            })
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
                        {vidArr.slice(0,3).map((i) => <div className="col-md-4" key={i.etag}><div onClick={() => this.clickHandler(i)} key={i.etag}><Videos videoItem = {i} key ={i.etag}/></div></div>)}
                    </div>
                    <div className="row">
                        {vidArr.slice(3,6).map((i) => <div className="col-md-4" key={i.etag}><div onClick={() => this.clickHandler(i)} key={i.etag}><Videos videoItem = {i} key ={i.etag}/></div></div>)}
                    </div>
                    <div className="row">
                        {vidArr.slice(6,9).map((i) => <div className="col-md-4" key={i.etag}><div onClick={() => this.clickHandler(i)} key={i.etag}><Videos videoItem = {i} key ={i.etag}/></div></div>)}
                    </div>
                    <div className="row">
                        {vidArr.slice(9,12).map((i) => <div className="col-md-4" key={i.etag}><div onClick={() => this.clickHandler(i)} key={i.etag}><Videos videoItem = {i} key ={i.etag}/></div></div>)}
                    </div>                    
                </div>
            );
        } else if(this.state.playVideo){
            return (   
                <div className="container-fluid Main">
                        <VideoPlayer videoItem={this.state.videoToPlay} />
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