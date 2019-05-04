// initial state
const initialState = {
  data: "Initial state string"
}

// Reducer
const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'TEST_GET':
    return {
      ...state,
      data: action.payload
    }
    default:
    return state
  }
}

export default reducer;
