import React, { Component } from 'react';
import Image from './Image';
class Flipcoin extends Component {
    static defaultProps={
        coins:[
            {furl:"https://tinyurl.com/react-coin-heads-jpg"},
            {furl:"https://tinyurl.com/react-coin-tails-jpg"}
        ]};
    constructor(props){
        super(props);
        this.state={heads:0,tails:0,info:null};
        this.clickHelper=this.clickHelper.bind(this);
    }
    clickHelper(e){
        let rand=Math.floor(Math.random()*2);
        this.setState((st)=>{
            return{
                heads:st.heads+(rand===0?1:0),
                tails:st.tails+(rand===1?1:0),
                info:this.props.coins[rand]
            };
        });
    }
    render() {
        return (
            <div>
                <h2>Let's flip a coin!</h2>
                {this.state.info&&<Image info={this.state.info}/>}
                <button onClick={this.clickHelper}>Flip MEEE</button>
                <p>Out of {this.state.heads+this.state.tails} flips, there are {this.state.heads} heads and {this.state.tails} tails.</p>
            </div>
        )
    }
}

export default Flipcoin;

