import React from 'react'
import AppContext from '_utils/context'

/**
 * Using higher-order-component to wrap components which using data from context data as props
 */
const withAppContext = Component => {
  class ContextWrapperComponent extends React.Component {
    render () {
      return (
        <AppContext.Consumer>
          {({ data, actions }) => (
            <Component {...this.props} context={data} actions={actions} />
          )}
        </AppContext.Consumer>
      )
    }
  }
  return ContextWrapperComponent
}

export default withAppContext
