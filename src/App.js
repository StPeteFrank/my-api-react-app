import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animals: [],
      jungle: [],
      desert: [],
      deleteDesert: []
    }
  }

  getAllAnimals = () => {
    axios.get('https://localhost:5001/api/animals').then(response => {
      this.setState({
        animals: response.data
      })
    })
  }
  componentDidMount() {
    this.getAllAnimals()
    axios.get('https://localhost:5001/api/animals/jungle').then(response => {
      this.setState({
        jungle: response.data
      })
    })
    axios.get('https://localhost:5001/api/animals/desert').then(response => {
      this.setState({
        desert: response.data
      })
    })
  }
  deleteDesert = () => {
    // console.log('click')
    axios
      .delete('https://localhost:5001/api/animals/location/desert')
      .then(this.getAllAnimals())
  }

  render() {
    return (
      <div className="App">
        <h1>Safari Vacation</h1>
        <h2>What, Where, and How Many</h2>
        <div className="Display">
          <h3>What Animals Did You See?</h3>
          {this.state.animals.map((animal, index) => {
            return <p key={index}>{animal.species}</p>
          })}
          <h3>What Animals Did You See In The Jungle?</h3>
          {this.state.jungle.map((animal, index) => {
            return <p key={index}>{animal.species}</p>
          })}
          <h3>What Animals Did You See In The Desert?</h3>
          {this.state.desert.map((animal, index) => {
            return <p key={index}>{animal.species}</p>
          })}
        </div>
        <div className="RemoveButton">
          <button onClick={this.deleteDesert}>Remove Desert Animals</button>
        </div>
      </div>
    )
  }
}

export default App

// .then(json => {
//   console.log(json)
// }
