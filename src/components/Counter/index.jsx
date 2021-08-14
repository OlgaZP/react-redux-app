import React from 'react';
import { connect } from 'react-redux';

function Counter(props) {
    const { count, step, dispatch } = props;

    const increment = () => {
        // action - js object with type required
        const action = {type: 'increment' };
        dispatch(action);
    };

    const decrement = () => {
        const action = {type: 'decrement' };
        dispatch(action);
    }

    const setStep = event => {
        const action = {type: 'setStep', value: Number(event.target.value)}
        dispatch(action);
    }

    return (
        <article>
            <div>Count: {count}</div>
            <input type='number' value={step} onChange={setStep} />
            <button onClick={decrement}> - </button>
            <button onClick={increment} > + </button>
        </article>
    )
}

const mapStateToProps= state => state;

const withState = connect (mapStateToProps);

const CounterWithState = connect(mapStateToProps)(Counter);

export default CounterWithState;