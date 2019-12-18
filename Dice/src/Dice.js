import React,{Component} from 'react';
import './Dice.css';
class Dice extends Component{
    render(){
        let alpha=`fas fa-dice-${this.props.die}`;
        return(
            <span>
                <i className={`${alpha} ${this.props.rolling?'shake':''}`}></i>
            </span>
            
        );
    }
}
export default Dice;