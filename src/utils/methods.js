import { ButtonMethod, maximumCharacters, TextOutput } from './constants'

export default {
  appendNumber(current, char) {
    let minusSign = current[0] === '-' ? current[0] : ''
    let newString = ''
    current = minusSign ? current.substr(1) : current

    if (current === '0') {
      newString = char === '.' ? '0.' : char
    } else if (char === '.' && current.indexOf(char) !== -1) {
      newString = current
    } else {
      newString = current + char
    }
    newString = newString.length > (maximumCharacters - 1) ? newString.substr(0, maximumCharacters - 1) : newString
    return minusSign + newString
  },

  removeNumber(current) {
    let numberOnly = current.replace(/.-/g, '')
    return numberOnly.length === 1 ? '0' : current.slice(0, -1)
  },

  toggleNegative(current) {
    return current.indexOf('-') === -1 ? '-' + current : current.replace('-', '')
  },

  calculate(param1, param2, method) {
    function calculateByMethod(method, x, y) {
      switch (method) {
        case ButtonMethod.ADD: return x + y
        case ButtonMethod.SUBTRACT: return x - y
        case ButtonMethod.MUTIPLY: return x * y
        case ButtonMethod.DIVIDE: return x / y
        default: return 0
      }
    }
    param1 = Number(param1)
    param2 = Number(param2)
    return this.formatNumber(calculateByMethod(method, param1, param2))
  },

  formatNumber(number) {
    if (number === Infinity) {
      return TextOutput.INFINITY
    }
    if (number >= Number.MAX_SAFE_INTEGER || number <= Number.MIN_SAFE_INTEGER) {
      return TextOutput.OUT_OF_MEMORY
    }
    if (number.toString().length <= maximumCharacters) {
      return number
    }

    if (number.toString().indexOf('.') !== -1) {
      let pointIndex = number.toString().indexOf('.')
      if (pointIndex < maximumCharacters - 1) {
        return number.toFixed(maximumCharacters - pointIndex - 1)
      }
      number = Math.round(number)
    }

    if (number.toString().length > maximumCharacters) {
      number = number.toExponential()
      if (number.toString().length > maximumCharacters) {
        let splitedString = number.toString().split('e')
        splitedString[0] = splitedString[0].substr(0, maximumCharacters - splitedString[1].length - 1)
        return splitedString.join('e')
      }
    }

    return number
  }
}