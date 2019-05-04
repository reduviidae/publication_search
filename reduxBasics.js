// imports
const redux = require('redux');
const createStore = redux.createStore;

// initial state
const initialState = {
  counter: 0
}

// reducer
const rootReducer = (state = initialState, action) => {
  switch(action.type){
    case 'INC_COUNTER':
    return {
      ...state,
      counter: state.counter + 1
    }
    case 'ADD_COUNTER':
    return {
      ...state,
      counter: state.counter + action.value
    }
    default:
    return state

  }
}

// store
const store = createStore(rootReducer);

// subscription
store.subscribe(() => {
  console.log('Subscription:', store.getState());
});

// dispatching action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10 });
