import React from 'react'
import { connect } from 'react-redux'

class Button extends React.Component {
  render () {
    const {
      buttonData,
      caculatorReducer,
      clickHandle
    } = this.props
    const activeClass = caculatorReducer.method === buttonData.method ? 'active' : ''
    return <div className={`button ${buttonData.type}-btn ${activeClass}`} onClick={() => clickHandle(buttonData)}>
      {buttonData.label}
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    caculatorReducer: state.caculatorReducer
  }
}

const mapDispatchToProps = dispatch => ({
  // action: (params) => dispatch(action(params))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)
