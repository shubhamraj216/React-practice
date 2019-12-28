import React, { Component } from 'react';
//import uuid from 'uuid/v4';
class Box extends Component {
    constructor(props) {
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(e){
        this.props.remove(this.props.req);
    }
    render() {

        return (
            <div>
                <div
                style={{height:`${this.props.req.height}em`,
                width:`${this.props.req.width}em`,
                background:`${this.props.req.backgroundcolor}`
                }} />
                <button onClick={this.handleClick}>Remove</button>
            </div>
        )
    }
}

export default Box;