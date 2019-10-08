const initialCaculater = {
  keepedValue: null,
  outputValue: '0',
  method: null,
  isNextValue: false
}
const caculatorReducer = (state = initialCaculater, action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return {
        ...state,
        ...action.data
      }

    default:
      return {
        ...state
      }
  }
}

export default caculatorReducer
