import React from 'react'
import AppContextContainer from '_components/context-container'

import Screen from '_components/screen'
import NumPad from '_components/numpad'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <AppContextContainer>
        <div>
          <h1>Calculator Example</h1>
          <Screen />
          <NumPad />
        </div>
      </AppContextContainer>
    )
  }
}

export default App
