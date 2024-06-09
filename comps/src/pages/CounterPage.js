import Button from "../components/Button";
// import useCounter from "../hooks/use-counter";
// import { useState } from "react";
import { useReducer } from "react";
import Panel from "../components/Panel";
import { produce } from 'immer';

const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'decrement';
const SET_VALUE_TO_ADD = 'change-value-to-add';
const ADD_VALUE_TO_COUNT = 'add-value-to-count';


const reducer = (state, action) => {
    // whatever gets returned will be the new state
    switch (action.type) {
        case INCREMENT_COUNT:
            state.count = state.count + 1;
            return;
        case DECREMENT_COUNT:
            state.count = state.count - 1;
            return;
        case SET_VALUE_TO_ADD:
            state.valueToAdd = action.payload;
            return;
        case ADD_VALUE_TO_COUNT:
            state.count = state.count + state.valueToAdd;
            state.valueToAdd = 0;
            return;
        default:
            throw new Error('unexpected action type: ' + action.type);
    };
};

function CounterPage({ initialCount }) {
    // const {count, increment} = useCounter(initialCount);
    // const [count, setCount] = useState(initialCount);
    // const [valueToAdd, setValueToAdd] = useState(0);
    const [state, dispatch] = useReducer(produce(reducer), {
        // initial state, we will not modify this state
        count: initialCount,
        valueToAdd: 0
    }); 

    const increment = () => {
        // setCount(count + 1);
        dispatch({
            type: INCREMENT_COUNT
        });
    };

    const decrement = () => {
        // setCount(count - 1);
        dispatch({
            type: DECREMENT_COUNT
        });
    };

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;
        // setValueToAdd(value);
        dispatch ({
            type: SET_VALUE_TO_ADD,
            payload: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // setCount(count + valueToAdd);
        // setValueToAdd(0);
        dispatch ({
            type: ADD_VALUE_TO_COUNT
        });
    };

    return (
        <Panel className="m-3">
            <h1 className="text-lg">Count is {state.count}</h1>
            <div className="flex flex-row">
            <Button onClick={increment}>increment</Button>
            <Button onClick={decrement}>Decrement</Button>
            </div>

            <form onSubmit={handleSubmit}>
                <label>Add a lot!</label>
                <input
                    value={state.valueToAdd || ""}
                    onChange={handleChange} 
                    type="number" 
                    className="p-1 m-3 bg-gray-50 border border-gray-300"
                />    
                <Button>Add it!</Button>
            </form>
        </Panel>
    );
};

export default CounterPage;