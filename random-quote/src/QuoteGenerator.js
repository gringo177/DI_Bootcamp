import React, { Component } from 'react';

class QuoteGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [
        {
          quote: 'Example Quote 1',
          author: 'Author 1',
        },
        {
          quote: 'Example Quote 2',
          author: 'Author 2',
        },
        // Add more quotes here
      ],
      currentQuoteIndex: 0,
      backgroundColor: this.getRandomColor(),
      headerColor: this.getRandomColor(),
      buttonColor: this.getRandomColor(),
    };
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  generateRandomQuote = () => {
    const { quotes, currentQuoteIndex } = this.state;
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * quotes.length);
    } while (newIndex === currentQuoteIndex);

    this.setState({
      currentQuoteIndex: newIndex,
      backgroundColor: this.getRandomColor(),
      headerColor: this.getRandomColor(),
      buttonColor: this.getRandomColor(),
    });
  };

  render() {
    const { quotes, currentQuoteIndex, backgroundColor, headerColor, buttonColor } = this.state;
    const { quote, author } = quotes[currentQuoteIndex];

    const quoteStyle = {
      backgroundColor: backgroundColor,
      color: headerColor,
    };

    const buttonStyle = {
      backgroundColor: buttonColor,
      color: 'white',
    };

    return (
      <div className="quote-generator" style={quoteStyle}>
        <h1 className="quote-header">{quote}</h1>
        <p className="quote-author">- {author}</p>
        <button className="new-quote-button" style={buttonStyle} onClick={this.generateRandomQuote}>
          New Quote
        </button>
      </div>
    );
  }
}

export default QuoteGenerator;
