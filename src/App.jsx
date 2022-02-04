import './App.css';
import React from 'react';
import QuoteBox from './components/quote-box';
import quotes from './quotes.json';
import RandomColor from './colors.js'


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      quote: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde",
      color: "red"
    }

    this.randomQuote = this.randomQuote.bind(this)

  }

  randomQuote(){
    this.setState({
      quote: quotes[Math.floor(Math.random()*quotes.length)].quote,
      author: quotes[Math.floor(Math.random()*quotes.length)].author,
      color: RandomColor()
    })
  }

  render() {
    return (
      <div className="App" style={{backgroundColor: this.state.color}}>
        <QuoteBox quote={this.state.quote} author={this.state.author} color={this.state.color} randomQuote={this.randomQuote}/>
      </div>
    );
  }
  
}


export default App;
