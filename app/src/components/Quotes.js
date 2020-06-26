  
import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {fetchQuote} from '../store/actions/quotesActions';

const Quotes = props => {
    useEffect(() => {
        props.fetchQuote()
    }, []);

    return (
        <main>
            <h1>Chuck Norris, The Facts:</h1>
            {props.quote && <h3>"{props.quote}"</h3>}
            {props.error && <p className="error">{props.error}</p>}
            <button onClick={props.fetchQuote}>more facts</button>
        </main>
    )
};
const mapStateToProps = state => {
    console.log(state)
    return {
        quote: state.quotesReducer.quote,
        isFetching: state.quotesReducer.isFetching,
        error: state.quotesReducer.error,
    }
}
export default connect(mapStateToProps, {fetchQuote})(Quotes);

