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

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
            .then(response=> {
                this.setState({
                    isLoaded: true,
                    data: response.data})
            })
            .catch(axiosError =>{
                this.setState({
                    error: axiosError
                })
            })
    }

    render() { 
        if(this.state.isLoaded){
            console.log(this.state.data)
            return(
                <div className="container">
                    <h1>{this.state.data.title}</h1>
                </div>
            );
        }
            return (
            <div className="container">
            </div> );
    }
}
 
export default Main;