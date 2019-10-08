import React from 'react'
import { connect } from 'react-redux'

class Screen extends React.Component {
  render () {
    const { caculatorReducer } = this.props
    return (
      <div className="screen code" id="screen">{caculatorReducer.outputValue}</div>
    )
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
)(Screen)
