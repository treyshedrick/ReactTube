import React, { Component } from 'react';
import axios from 'axios';
import Videos from './Videos'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            data: {},
            error: null
        }
    }

    //Youtube Endpoint
    //https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&order=viewCount&q=ReactJS%20Tutorial&key=' + process.env.REACT_APP_YOUTUBE_API_KEY

    componentDidMount(){
        axios.get('./test.json') //test file
            .then(response=> {
                this.setState({
                    isLoaded: true,
                    data: response.data})
            })
            .catch(axiosError =>{
                this.setState({
                    isLoaded: true,
                    error: axiosError
                })
            })
    }

    render() { 
        const vidArr = this.state.data.items;
                
        if(this.state.isLoaded){
            return (
                <div className="container">
                    <div className="row">
                        {vidArr.slice(0,3).map((i) => <Videos videoItem = {i} key ={i.etag}/>)}
                    </div>
                    <div className="row">
                        {vidArr.slice(3,6).map((i) => <Videos videoItem = {i} key ={i.etag}/>)}
                    </div>
                    <div className="row">
                        {vidArr.slice(6,9).map((i) => <Videos videoItem = {i} key ={i.etag}/>)}
                    </div>
                    <div className="row">
                        {vidArr.slice(9,12).map((i) => <Videos videoItem = {i} key ={i.etag}/>)}
                    </div>
                </div>
            );
        } else if(this.state.error){
            return (
            <div className="container">
                <h1>Error: {this.state.error.message}</h1>
            </div>
            );
        } else{
            return (
                <div className="container"></div> );
        }
    }
}
 
export default Main;