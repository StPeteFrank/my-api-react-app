import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = this.initialState
  }

  componentDidMount() {
    axios.get('https://localhost:5001/api/animals').then(json => {
      console.log(json)
    })
  }

  render() {
    return (
      <div className="Header">
        <h1>Safari Vacation</h1>
        <h2>What, Where, and How Many</h2>
      </div>
    )
  }
}

export default App
