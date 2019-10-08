import React from 'react'
import withAppContext from './with-context-hoc'

class Button extends React.Component {
  render() {
    const { buttonData, context } = this.props
    let activeClass = context.method === buttonData.method ? 'active' : ''
    return <div className={`button ${buttonData.type}-btn ${activeClass}`} onClick={() => this.props.clickHandle(buttonData)}>
      {buttonData.label}
    </div>  
  }
}

export default withAppContext(Button)