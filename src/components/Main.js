import React, { Component } from 'react';
import axios from 'axios';

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
    //https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=ReactJS%20Tutorial&type=videos&key=' + process.env.REACT_APP_YOUTUBE_API_KEY

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
        if(this.state.isLoaded){
            console.log(this.state.data)
            return (
                <div className="container">
                    <h1>{this.state.data.items[2].snippet.channelTitle}</h1>
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