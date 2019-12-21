import React, { Component } from "react";
import Ball from "./Ball";
import "./Lottery.css";

class Lottery extends Component {
  static defaultProps = {
    title: "Lotto",
    numBalls: 6,
    maxNum: 40
  };
  // constructor(props) {
  //   super(props);
  //   this.state = { nums: Array.from({ length: this.props.numBalls }) };
  //   this.handleClick = this.handleClick.bind(this);
  // }
  constructor(props) {
    super(props);
    this.state = { nums: Array.from(Array(this.props.numBalls)) };
    this.handleClick = this.handleClick.bind(this);
  }
  // generate() {
  //   this.setState(curState => ({
  //     nums: curState.nums.map(
  //       n => Math.floor(Math.random() * this.props.maxNum) + 1
  //     )
  //   }));
  // }
  generate() {
    let arr=[];
    for(let i=0;i<this.props.numBalls;i++){
      arr.push(Math.floor(Math.random()*this.props.maxNum)+1);
    }
    this.setState({nums:arr});

  }
  handleClick() {
    this.generate();
  }
  render() {
    return (
      <section className='Lottery'>
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map(n => (
            <Ball num={n} />
          ))}
        </div>
        <button onClick={this.handleClick}>Generate</button>
      </section>
    );
  }
}

export default Lottery;
