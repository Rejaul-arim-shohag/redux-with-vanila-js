// select dom elements
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// initial state
const initialState = {
    value: 0,
};
// action idetifier
const INCREMENT= 'increment'
const DECREMENT='decrement'

//action creator
const increment=(value)=>{
    store.dispatch({
        type:INCREMENT,
        payload: value
    });
}
const decrement=(value)=>{
    store.dispatch({
        type: DECREMENT,
        payload: value
    });
}

// create reducer function
function counterReducer(state = initialState, action) {
    if (action.type === INCREMENT) {
        return {
            ...state,
            value: state.value + action.payload,
        };
    } else if (action.type === DECREMENT) {
        return {
            ...state,
            value: state.value - action.payload,
        };
    } else {
        return state;
    }
}

// create store
const store = Redux.createStore(counterReducer);

const render = () => {
    const state = store.getState();
    counterEl.innerText = state.value.toString();
};

// update UI initially
render();

store.subscribe(render);

// button click listeners
incrementEl.addEventListener("click", () => {
    increment(100)
});

decrementEl.addEventListener("click", () => {
    decrement(50)
});