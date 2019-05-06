// initial state
const initialState = {
  data: []
}

// Reducer
const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'GET_AUTHORS':
    return {
      ...state,
      data: action.payload
    }
    default:
    return state
  }
}

export default reducer;
