// initial state
const initialState = {
  author: []
}

// Reducer
const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'GET_AUTHOR':
    return {
      ...state,
      author: action.payload
    }
    default:
    return state
  }
}

export default reducer;
