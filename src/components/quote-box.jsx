const QuoteBox = (props) => {
    return (
        <div id="quote-box">
            <h1 id="text" style={{color: props.color}}><i className="fas fa-quote-left" style={{color: props.color}} /> {props.quote}</h1>
            <p id="author">- {props.author}</p>
            <div id="buttons">
                <a id="tweet-quote" href={'https://twitter.com/intent/tweet?text="' + encodeURIComponent(props.quote) + '" - ' + encodeURIComponent(props.author)} className="button" style={{backgroundColor: props.color}}><i className="fab fa-twitter fa-lg"></i></a>
                <button id="new-quote" onClick={props.randomQuote} className="button" style={{backgroundColor: props.color}} >New quote</button>
            </div>

        </div>
    )
}

export default QuoteBox

