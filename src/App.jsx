import './App.css';
import React from 'react';
import QuoteBox from './components/quote-box';
import quotes from './quotes.json';
import RandomColor from './randomColor.js'


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      quote: "",
      author: "",
      color: ""
    }

    this.randomQuote = this.randomQuote.bind(this)
  }

  randomQuote(){
    do {
      var color = RandomColor();
    } while (color === this.state.color);

    let number = Math.floor(Math.random()*quotes.length)
    
    this.setState({
      quote: quotes[number].quote,
      author: quotes[number].author,
      color: color
    })
  }

  componentDidMount(){
    this.randomQuote()
  }

  render() {
    return (
      <div className="App" style={{backgroundColor: this.state.color, transition: "background-color 1s"}}>
        <QuoteBox quote={this.state.quote} author={this.state.author} color={this.state.color} randomQuote={this.randomQuote}/>
        <a href="https://github.com/jero237" id='github' target="_blank" rel="noreferrer">Made with React.js<br /><i class="fab fa-github"></i> jero237</a>
      </div>
    );
  }
  
}


export default App;
