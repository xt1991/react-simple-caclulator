import React from 'react'
import withAppContext from './with-context-hoc'

class Screen extends React.Component {
  render() {
    return (
      <div className="screen code" id="screen">{this.props.context.outputValue}</div>
    )
  }
}
export default withAppContext(Screen)