import ACTION_TYPES from "./actionTypes";

export const increment = () => ({type: ACTION_TYPES.INCREMENT});

export const decrement = () => ({type: ACTION_TYPES.DECREMENT});

export const setStep = newStep => ({
    type: ACTION_TYPES.SETSTEP, 
    value:newStep,
});