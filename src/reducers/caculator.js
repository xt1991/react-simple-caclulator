const initialCaculater = {
  result: 0
}
const caculatorReducer = (state = initialCaculater, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        result: action.result
      }
    case 'SUBTRACT':
      return {
        ...state,
        result: action.result
      }
    case 'MULTIPLY':
      return {
        ...state,
        result: action.result
      }

    case 'DIVIDE':
      return {
        ...state,
        result: action.result
      }

    default:
      return {
        ...state
      }
  }
}

export default caculatorReducer
