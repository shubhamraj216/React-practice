import React,{Component} from 'react';
import Dice from './Dice';
import './DiceRoll.css';

class DiceRoll extends Component{
    static defaultProps={ arr:['one','two','three','four','five','six']};
    constructor(props){
        super(props);
        this.state={die1:'one',die2:'one',rolling:false};
        this.handleClick=this.handleClick.bind(this);
    }
    
    handleClick=()=>{
        let rand1=this.props.arr[Math.floor(Math.random()*6)];
        let rand2=this.props.arr[Math.floor(Math.random()*6)];
        this.setState({die1:rand1,die2:rand2,rolling:true});
        setTimeout(()=>{
            this.setState({rolling:false})
        },1000);
    }
    render(){
        return(
            <div>
                <div class="DiceRoll">
                    <Dice die={this.state.die1} rolling={this.state.rolling}/>
                    <Dice die={this.state.die2} rolling={this.state.rolling}/>
                </div>
                <button onClick={this.handleClick} disabled={this.state.rolling}>{this.state.rolling?'Rolling...':'Roll Them'}</button>
            </div>
            
        );
    }
}
export default  DiceRoll;