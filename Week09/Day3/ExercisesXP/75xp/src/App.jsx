// import { useState } from 'react'
import React from 'react'
import './App.css'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import Colors from './components/Colors.jsx'

class BuggyCounter extends React.Component {
  constructor() {
    super()
    this.state = { counter: 0 }
  }
  handleClick = () => {

    this.setState({ counter: this.state.counter + 1 })

  }



  render() {

    if (this.state.counter >= 5) {
      throw new Error("I crashed!")
    }


    return (
      <div>
        {this.state.counter}
        < button onClick={this.handleClick} > + </button >
      </div>
    )
  }
}

function App() {


  return (
    <>
      <h2>Both counters in same error boundary:</h2>
      <ErrorBoundary>

        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>
      <h2>Both counters in their own error boundary:</h2>
      <ErrorBoundary>


        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>

        <BuggyCounter />

      </ErrorBoundary>


      <h2>No error boundaries:</h2>
      <BuggyCounter />

      <Colors />
    </>

  )
}

export default App
