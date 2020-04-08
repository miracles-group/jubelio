import React, { Component } from 'react'
// import {Switch,Route} from 'react-router'
// import Register from './components/Admin/Register'
import SaleBefore from './components/Sales/SaleBefore/SaleBefore'

export class App extends Component {
  render() {
    return (
      <div>
        <div>
          <SaleBefore />
        </div>
      </div>
    )
  }
}

export default App
