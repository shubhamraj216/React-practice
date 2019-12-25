import React, {Component} from "react";
import Cell from "./Cell";
import { Random } from './Random';
import './Board.css';


class Board extends Component {
  static defaultProps={
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 4.5
  }
  constructor(props) {
    super(props);

    this.state= {hasWon: false, Board: this.createBoard()};
    //this.checkWin=this.checkWin.bind(this);
  }
  //[[false,true,false],[true,true,true],[false,true,false]]

  createBoard() {
    let board = [];
    

    for(let i=0;i<this.props.nrows;i++){
      let rowx=[];
      for(let j=0;j<this.props.ncols;j++){
        rowx.push(Random()<this.props.chanceLightStartsOn);
      }
      board.push(rowx);
    }

    return board;
  }


  flipCellsAround(coord) {
    let {nrows, ncols}=this.props;
    let board = this.state.Board;
    let [y, x] = coord.split("-").map(Number);


    function flipCell(y, x) {

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
      
    }
    flipCell(y,x);
    flipCell(y-1,x);
    flipCell(y+1,x);
    flipCell(y,x-1);
    flipCell(y,x+1);
    let isWin=board.every(row=>row.every(col=>!col));
    this.setState({Board: board, hasWon:isWin});
  }


  // checkWin=()=>{
  //   for(let i=0;i<this.props.nrows;i++){
  //     for(let j=0;j<this.props.ncols;j++){
  //       if(this.state.Board[i][j]===true)
  //         return false;
  //     }
  //   }
  //   return true;
  // }


  render() {

    if(this.state.hasWon){
      return(
        <div class="container">
          <div class="neon">You </div>
          <div class="flux">Win! </div>
        </div>
      )
    }

    return(
      <div>
        <div class="container">
          <div class="neon">Lights </div>
          <div class="flux">Out </div>
        </div>
        <table className="Board">
          <tbody>
            {this.state.Board.map((x,i)=>
            <tr key={i}>
              {x.map((y,j)=>
              {let coord=`${i}-${j}`;
              return <Cell key={coord} isLit={y} flipCellsAroundMe={()=>this.flipCellsAround(coord)} />}
              )}
            </tr>)}
          </tbody>
        </table>
      </div>
    );
  }
}


export default Board;
