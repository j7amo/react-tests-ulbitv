import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCounterValue} from "../../store/selectors/getCounterValue/getCounterValue";
import {decrement, increment} from "../../store/reducers/counterSlice";

const Counter = () => {
    const dispatch = useDispatch();
    const value = useSelector(getCounterValue);
    const onIncrement = () => {
        dispatch(increment());
    }
        const onDecrement = () => {
        dispatch(decrement());
    }
    return (
        <div>
            <h1 data-testid='value-header'>value = {value}</h1>
            <button data-testid='increment-button' onClick={onIncrement}>Increment</button>
            <button data-testid='decrement-button' onClick={onDecrement}>Decrement</button>
        </div>
    );
};

export default Counter;
