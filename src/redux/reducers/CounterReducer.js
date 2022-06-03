const initialState = {
    value: 0,
    input: 0,
    buttonInput: 0
};

function CounterReducer(state = initialState, action) {
    switch (action.type) {
        case "INCREMENT_VALUE":
            return {
                ...state,
                value: state.value + 1,
            };

        case "DECREMENT_VALUE":
            return {
                ...state,
                value: state.value - 1,
            };
        case "INCREMENT_PAYLOAD":
            return {
                ...state,
                value: state.value + action.payload,
            };
        case "INCREMENT_BY_BUTTON":
            return {
                ...state,
                value: state.value + action.payload,
                
            };
        case "SET_INPUT":
            return {
                ...state,
                buttonInput: state.buttonInput + action.payload,
                
            };

        default:
            return state;
    }
}

export default CounterReducer;