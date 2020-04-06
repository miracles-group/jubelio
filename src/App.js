import React, { Component } from 'react'
// import {Switch,Route} from 'react-router'
// import Register from './components/Admin/Register'
import { Button } from 'antd';
export class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="link">Link</Button>
        </div>
      </div>
    )
  }
}

export default App
