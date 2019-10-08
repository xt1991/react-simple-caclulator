import React from 'react'

import Screen from '_components/screen'
import NumPad from '_components/numpad'
import './App.css'

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Calculator Example</h1>
        <Screen />
        <NumPad />
      </div>
    )
  }
}

export default App
