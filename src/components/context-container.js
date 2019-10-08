import React from 'react'
import AppContext from '_utils/context'
import utilMethods from '_utils/methods'

const initState = {
  keepedValue: null,
  outputValue: '0',
  method: null,
  isNextValue: false
}
class AppContextContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { ...initState }

    this.inputCharacter = this.inputCharacter.bind(this)
    this.removeCharacter = this.removeCharacter.bind(this)
    this.toggleNegative = this.toggleNegative.bind(this)
    this.clearValue = this.clearValue.bind(this)
    this.takeMethod = this.takeMethod.bind(this)
    this.getResult = this.getResult.bind(this)
  }

  clearValue() {
    this.setState({ ...initState })
  }

  inputCharacter(char) {
    const { isNextValue, outputValue } = this.state
    const newState = isNextValue ? {
      isNextValue: false,
      outputValue: utilMethods.appendNumber('0', char)
    } : {
        outputValue: utilMethods.appendNumber(outputValue, char)
      }
    this.setState(newState)
  }

  removeCharacter() {
    const { isNextValue, outputValue } = this.state
    if (!isNextValue) {
      this.setState({
        outputValue: utilMethods.removeNumber(outputValue)
      })
    }
  }

  toggleNegative() {
    const { isNextValue, outputValue } = this.state
    const newState = isNextValue ? {
      outputValue: '-0',
      isNextValue: false
    } : {
        outputValue: utilMethods.toggleNegative(outputValue)
      }
    this.setState(newState)
  }

  takeMethod(newMethod) {
    const { keepedValue, outputValue, method, isNextValue } = this.state
    let newState = {
      method: newMethod,
      isNextValue: true
    }
    if (!keepedValue || isNextValue) {
      newState = {
        ...newState,
        keepedValue: outputValue,
      }
    } else {
      let newResult = utilMethods.calculate(keepedValue, outputValue, method)
      newState = {
        ...newState,
        outputValue: newResult,
        keepedValue: newResult,
      }
    }
    this.setState(newState)
  }

  getResult() {
    const { keepedValue, outputValue, method } = this.state
    if (keepedValue) {
      this.setState({
        outputValue: utilMethods.calculate(keepedValue, outputValue, method),
        keepedValue: null,
        method: null,
        isNextValue: true
      })
    }
  }

  render() {
    return <AppContext.Provider value={{
      data: { ...this.state },
      actions: {
        clearValue: this.clearValue,
        inputCharacter: this.inputCharacter,
        removeCharacter: this.removeCharacter,
        toggleNegative: this.toggleNegative,
        takeMethod: this.takeMethod,
        getResult: this.getResult
      }
    }}>
      {this.props.children}
    </AppContext.Provider>
  }
}

export default AppContextContainer