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
                    <div className="col-12">
                        <button className="HTbuttons" value="" type="Submit" onClick={this.clickHandler}>All</button>
                        <button className="HTbuttons" value="JSX" type="Submit" onClick={this.clickHandler}>JSX</button>
                        <button className="HTbuttons" value="Componenets" type="Submit" onClick={this.clickHandler}>Components</button>
                        <button className="HTbuttons" value="Props" type="Submit" onClick={this.clickHandler}>Props</button>
                        <button className="HTbuttons" value="State" type="Submit" onClick={this.clickHandler}>State</button>
                        <button className="HTbuttons" value="Lifecycle%20Methods" type="Submit" onClick={this.clickHandler}>Lifecycle Methods</button>
                        <button className="HTbuttons" value="Event%Handling" type="Submit" onClick={this.clickHandler}>Event Handling</button>
                        <button className="HTbuttons" value="Hooks" type="Submit" onClick={this.clickHandler}>Hooks</button>
                        <button className="HTbuttons" value="API" type="Submit" onClick={this.clickHandler}>API</button>
                    </div>
                </div>
                <Main urlSearch={this.state.clickedVal}/>
            </Fragment>
        );
    }
}
 
export default HeaderTopics;