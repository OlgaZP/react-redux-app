import React from 'react';
import { connect } from 'react-redux';
import ACTION_TYPES from '../../actions/actionTypes';
import * as actionCreators from './../../actions';

function Counter (props) {
  const {
    count,
    step,
    incrementAction,
    decrementAction,
    setStepAction,
  } = props;

  const setStep = event => {
    setStepAction(Number(event.target.value));
  };

  return (
    <article>
      <div>Count: {count}</div>
      <input type='number' value={step} onChange={setStep} />
      <button onClick={decrementAction}> - </button>
      <button onClick={incrementAction}> + </button>
    </article>
  );
}

const mapStateToProps = state => state.counter;

const mapDispatchToProps = dispatch => {
  return {
    incrementAction: () => {
      dispatch(actionCreators.increment());
    },
    decrementAction: () => {
      dispatch(actionCreators.decrement());
    },
    setStepAction: value => {
      dispatch(actionCreators.setStep(value));
    },
  };
};

//const withState = connect (mapStateToProps);

const CounterWithState = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default CounterWithState;
