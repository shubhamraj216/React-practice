import React, {Component} from 'react';
import Block from './Block';
import './BoxContainer.css';
class BoxContainer extends Component{
    static defaultProps={
        num:16,
        color:[
            'red','blue','green',
            'black','yellow','grey',
            'aqua','brown','coral',
            'cornflowerblue','crimson',
            'rebeccapurple','royalblue',
            'powderblue','palegreen',
            'palegoldenrod','burlywood'
        ]
    }
    render(){
        const box=Array.from(Array(this.props.num)).map(()=>(<Block color={this.props.color}/>));
        return(
            <div className="BoxContainer">
                {box}
            </div>
        );
        
    }
}
export default BoxContainer;