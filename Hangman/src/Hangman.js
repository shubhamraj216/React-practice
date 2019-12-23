import React, { Component } from "react";
import "./Hangman.css";
import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6],
    words: ["apple", "banana", "pineapple", "cherry", "orange"]
  };
  
  constructor(props) {
    super(props);
    let rand=this.props.words[Math.floor(Math.random()*(this.props.words.length))];
    this.state = { nWrong: 0, guessed: new Set(), answer: rand };
    this.handleGuess = this.handleGuess.bind(this);
    this.restart = this.restart.bind(this);
  }

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    return this.state.answer
      .split("")
      .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
  }
  
  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(evt) {
    let ltr = evt.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
    }));
  }

  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
      <button
        key={ltr}
        value={ltr}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(ltr)}
      >
        {ltr}
      </button>
    ));
  }
  //Restart Handler
  restart(){
    let rand=this.props.words[Math.floor(Math.random()*(this.props.words.length))];
    let restarter={
      nWrongs: 0,
      guesseds: new Set(),
      answers: rand
    };
    this.setState({nWrong:restarter.nWrongs, guessed:restarter.guesseds, answer:restarter.answers});
    this.guessedWord();
    this.generateButtons();
  }

  /** render: render game */
  render() {
    let gameEnd=(this.props.maxWrong===this.state.nWrong)&&(this.state.guessed-this.state.nWrong===this.props.maxWrong);
    return (
      <div className='Hangman'>
        <h1>Hangman</h1>
        <img src={this.props.images[this.state.nWrong]} alt={`${this.state.nWrong}/${this.props.maxWrong}`}/>
        <div><button onClick={this.restart} id="rbutton">Restart</button></div>
        <p className='Hangman-word'>{this.guessedWord()}</p>
        <p>Wrong Guesses:{this.state.nWrong}</p>
        {!gameEnd && <p className="Hangman-btns" >{this.generateButtons()}</p>}
        {gameEnd && <div>
          <h3>YOU LOSE!</h3>
          <h4>Correct Word:{this.state.answer}</h4>
        </div>}
      </div>
    );
  }
}

export default Hangman;
