const initialState = { count: 0, step: 1 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return {...state, count : state.count + state.step};
    case 'decrement':
      return {...state, count : state.count - state.step};
    case 'setStep':
      return {...state, step: action.value };
    default: 
      return state;
  }  
};

export default reducer;