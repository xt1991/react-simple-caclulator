import React from 'react'
import { connect } from 'react-redux'
import Button from './button'

//actions
import { 
  clearValue,
  inputCharacter,
  removeCharacter,
  toggleNegative,
  takeMethod,
  getResult,
} from '_actions/'

import { buttonList, ButtonType, ButtonMethod } from '_utils/constants'

class NumPad extends React.Component {
  componentDidMount () {
    document.addEventListener('keyup', this.keyPressHandle.bind(this), false)
  }

  componentWillUnmount () {
    document.removeEventListener('keyup', this.keyPressHandle, false)
  }

  keyPressHandle (e) {
    const keyCode = e.keyCode

    const {
      inputCharacter,
      removeCharacter,
      clearValue,
      takeMethod,
      getResult,
    } = this.props

    if (((keyCode >= 48 && keyCode <= 57) || keyCode === 110 || keyCode === 190) && !e.shiftKey) {
      inputCharacter(e.key)
    } else if (keyCode === 8) {
      removeCharacter()
    } else if (keyCode === 46) {
      clearValue()
    } else if (keyCode === 107 || (keyCode === 187 && e.shiftKey)) {
      takeMethod(ButtonMethod.ADD)
    } else if (keyCode === 109 || (keyCode === 189 && !e.shiftKey)) {
      takeMethod(ButtonMethod.SUBTRACT)
    } else if (keyCode === 106 || (keyCode === 56 && e.shiftKey)) {
      takeMethod(ButtonMethod.MUTIPLY)
    } else if (keyCode === 111 || (keyCode === 191 && !e.shiftKey)) {
      takeMethod(ButtonMethod.DIVIDE)
    } else if (keyCode === 13) {
      getResult()
    }
  }

  buttonClickHandle = (e) => {

    const {
      inputCharacter,
      removeCharacter,
      clearValue,
      toggleNegative,
      takeMethod,
      getResult,
    } = this.props
    switch (e.type) {
      case ButtonType.NUMBER:
        inputCharacter(e.label)
        break
      case ButtonType.REMOVE:
        removeCharacter()
        break
      case ButtonType.CLEAR:
        clearValue()
        break
      case ButtonType.TOGGLE_NEGATIVE:
        toggleNegative()
        break
      case ButtonType.METHOD:
        takeMethod(e.method)
        break
      case ButtonType.RESULT:
        getResult()
        break
      default:
        
    }
  }

  render () {
    return <div className="pad-wrapper">
      { buttonList.map((btn, index) => {
        return <Button buttonData={btn} key={index} clickHandle={this.buttonClickHandle} />
      })}
    </div>
  }
}

// export default withAppContext(NumPad)
const mapStateToProps = (state) => {
  return {
    caculatorReducer: state.caculatorReducer
  }
}

const mapDispatchToProps = dispatch => ({
  inputCharacter: (params) => dispatch(inputCharacter(params)),
  takeMethod: (params) => dispatch(takeMethod(params)),
  removeCharacter: () => dispatch(removeCharacter()),
  clearValue: () => dispatch(clearValue()),
  toggleNegative: () => dispatch(toggleNegative()),
  getResult: () => dispatch(getResult())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NumPad)