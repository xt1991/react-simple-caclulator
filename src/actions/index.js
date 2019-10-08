/**
 */
import utilMethods from '_utils/methods'
import { buttonList } from '_utils/constants'

export const caculatorReducer = (data) => {
  return {
    type: 'FETCH_DATA',
    data
  }
}
let initState = {
  keepedValue: null,
  outputValue: '0',
  method: null,
  isNextValue: false
}

export const clearValue = () => {
  return (dispatch) => {
    return dispatch(caculatorReducer({
      keepedValue: null,
      outputValue: '0',
      method: null,
      isNextValue: false
    }))
  }
}

export const inputCharacter = (char) => {
  const { isNextValue, outputValue } = initState
  const newState = isNextValue ? {
    isNextValue: false,
    outputValue: utilMethods.appendNumber('0', char)
  } : {
    outputValue: utilMethods.appendNumber(outputValue, char)
  }
  return (dispatch) => {
    initState = {
      ...initState,
      ...newState
    }
    return dispatch(caculatorReducer(initState))
  }
}

export const removeCharacter = () => {
  const { isNextValue, outputValue } = initState
  if (!isNextValue) {
    initState.outputValue = utilMethods.removeNumber(outputValue)
  }
  return (dispatch) => {
    return dispatch(caculatorReducer(initState))
  }
}

export const toggleNegative = () => {
  const { isNextValue, outputValue } = initState
  const newState = isNextValue ? {
    outputValue: '-0',
    isNextValue: false
  } : {
    outputValue: utilMethods.toggleNegative(outputValue)
  }
  return (dispatch) => {
    initState = {
      ...initState,
      ...newState
    }
    return dispatch(caculatorReducer(initState))
  }
}

export const takeMethod = (newMethod) => {
  const { keepedValue, outputValue, method, isNextValue } = initState
  let newState = {
    method: newMethod,
    isNextValue: true
  }
  if (!keepedValue || isNextValue) {
    newState = {
      ...newState,
      keepedValue: outputValue
    }
  } else {
    const newResult = utilMethods.calculate(keepedValue, outputValue, method)
    newState = {
      ...newState,
      outputValue: newResult,
      keepedValue: newResult
    }
  }

  return (dispatch) => {
    initState = {
      ...initState,
      ...newState
    }
    return dispatch(caculatorReducer(initState))
  }
}

export const getResult = () => {
  return (dispatch) => {
    const { keepedValue, outputValue, method } = initState
    if (keepedValue) {
      initState = {
        ...initState,
        outputValue: utilMethods.calculate(keepedValue, outputValue, method),
        keepedValue: null,
        method: null,
        isNextValue: true
      }
    }
    return dispatch(caculatorReducer(initState))
  }
}
