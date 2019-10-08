export const ButtonType = {
  CLEAR: 'clear',
  REMOVE: 'remove',
  RESULT: 'result',
  NUMBER: 'number',
  METHOD: 'method',
  TOGGLE_NEGATIVE: 'toggle-negative'
}
export const ButtonMethod = {
  DIVIDE: 'divide',
  MUTIPLY: 'mutiply',
  SUBTRACT: 'subtract',
  ADD: 'add'
}

/**
 * This buttons list ordered follow flex layout
 */
export const buttonList = [
  { label: 'C', type: ButtonType.CLEAR },
  { label: '>', type: ButtonType.REMOVE },
  { label: '+/-', type: ButtonType.TOGGLE_NEGATIVE },
  { label: '/', type: ButtonType.METHOD, method: ButtonMethod.DIVIDE, methodName: 'divide' },
  { label: '7', type: ButtonType.NUMBER },
  { label: '8', type: ButtonType.NUMBER },
  { label: '9', type: ButtonType.NUMBER },
  { label: 'X', type: ButtonType.METHOD, method: ButtonMethod.MUTIPLY, methodName: 'mutiply' },
  { label: '4', type: ButtonType.NUMBER },
  { label: '5', type: ButtonType.NUMBER },
  { label: '6', type: ButtonType.NUMBER },
  { label: '-', type: ButtonType.METHOD, method: ButtonMethod.SUBTRACT, methodName: 'subtract' },
  { label: '1', type: ButtonType.NUMBER },
  { label: '2', type: ButtonType.NUMBER },
  { label: '3', type: ButtonType.NUMBER },
  { label: '+', type: ButtonType.METHOD, method: ButtonMethod.ADD, methodName: 'add' },
  { label: '0', type: ButtonType.NUMBER },
  { label: '.', type: ButtonType.NUMBER },
  { label: '=', type: ButtonType.RESULT }
]

// Maximum characters in screen
export const maximumCharacters = 13

export const TextOutput = {
  INFINITY: 'Infinity',
  OUT_OF_MEMORY: 'Out of Memory'
}
