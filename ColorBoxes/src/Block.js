import React, {Component} from 'react';
import './Block.css';
import {choice} from './helpers'
class Block extends Component{
    static defaultProps={
        
    }
    constructor(props){
        super(props);
        this.state={colour:choice(this.props.color)};
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(e){
        let x;
        do{
            x=choice(this.props.color);
        }while(x===this.state.colour);
        this.setState(st=>{return {colour:x};});
    }
    render(){
        return(
            <div onClick={this.handleClick} className="Block" style={{backgroundColor:this.state.colour}} />
        );
    }
}
export default Block;