import React, { Component } from 'react';
import { Fragment } from 'react';
import Main from './Main';
//import axios from 'axios';

class HeaderTopics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickedVal: null,
        }
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler = (event) => {
        this.setState({clickedVal: event.target.value})
        }

    render() {
        return (
            <Fragment>
                <div className="row HeaderTopics">
                    <button value="" type="Submit" onClick={this.clickHandler}>All</button>
                    <button value="JSX" type="Submit" onClick={this.clickHandler}>JSX</button>
                    <button value="Componenets" type="Submit" onClick={this.clickHandler}>Components</button>
                    <button value="Props" type="Submit" onClick={this.clickHandler}>Props</button>
                    <button value="State" type="Submit" onClick={this.clickHandler}>State</button>
                    <button value="Lifecycle%20Methods" type="Submit" onClick={this.clickHandler}>Lifecycle Methods</button>
                    <button value="Event%Handling" type="Submit" onClick={this.clickHandler}>Event Handling</button>
                    </div>
                <Main urlSearch={this.state.clickedVal}/>
            </Fragment>
        );
    }
}
 
export default HeaderTopics;