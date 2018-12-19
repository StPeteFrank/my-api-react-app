import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animals: []
    }
  }

  componentDidMount() {
    axios.get('https://localhost:5001/api/animals').then(response => {
      this.setState({
        animals: response.data
      })
    })
  }

  render() {
    return (
      <div className="Header">
        <h1>Safari Vacation</h1>
        <h2>What, Where, and How Many</h2>
        {this.state.animals.map((animal, index) => {
          return <p key={index}>{animal.species}</p>
        })}
      </div>
    )
  }
}

export default App

// .then(json => {
//   console.log(json)
// }
