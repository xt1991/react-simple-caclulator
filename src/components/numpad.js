import React from 'react'
import Button from './button'

import withAppContext from './with-context-hoc'
import { buttonList, ButtonType, ButtonMethod } from '_utils/constants'

class NumPad extends React.Component {

  componentDidMount(){
    document.addEventListener("keyup", this.keyPressHandle.bind(this), false)
  }

  componentWillUnmount(){
    document.removeEventListener("keyup", this.keyPressHandle, false)
  }

  keyPressHandle(e) {
    const { actions } = this.props
    const keyCode = e.keyCode

    if (((keyCode >= 48 && keyCode <= 57) || keyCode === 110 || keyCode === 190) && !e.shiftKey) {
      actions.inputCharacter(e.key)
    } else if (keyCode === 8) {
      actions.removeCharacter()
    } else if (keyCode === 46) {
      actions.clearValue()
    } else if (keyCode === 107 || (keyCode === 187 && e.shiftKey)) {
      actions.takeMethod(ButtonMethod.ADD)
    } else if (keyCode === 109 || (keyCode === 189 && !e.shiftKey)) {
      actions.takeMethod(ButtonMethod.SUBTRACT)
    } else if (keyCode === 106 || (keyCode === 56 && e.shiftKey)) {
      actions.takeMethod(ButtonMethod.MUTIPLY)
    } else if (keyCode === 111 || (keyCode === 191 && !e.shiftKey)) {
      actions.takeMethod(ButtonMethod.DIVIDE)
    } else if (keyCode === 13) {
      actions.getResult()
    }
  }

  buttonClickHandle(e) {
    const { actions } = this.props
    switch (e.type) {
      case ButtonType.NUMBER:
        actions.inputCharacter(e.label)
        break
      case ButtonType.REMOVE:
        actions.removeCharacter()
        break
      case ButtonType.CLEAR:
        actions.clearValue()
        break
      case ButtonType.TOGGLE_NEGATIVE:
        actions.toggleNegative()
        break
      case ButtonType.METHOD:
        actions.takeMethod(e.method)
        break
      case ButtonType.RESULT:
        actions.getResult()
        break
      default:
        return
    }
  }

  render() {
    return <div className="pad-wrapper">
      { buttonList.map((btn, index) => {
        return <Button buttonData={btn} key={index} clickHandle={this.buttonClickHandle.bind(this)} />
      })}
    </div>
  }
}

export default withAppContext(NumPad)