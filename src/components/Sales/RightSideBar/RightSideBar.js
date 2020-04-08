import React, { Component } from 'react'
import './style.scss'
import { Divider, Button } from 'antd'
import { PlusSquareOutlined } from '@ant-design/icons'
export class RightSideBar extends Component {
  render() {
    return (
      <div className="rightSideBar">
        <div className="header">
          Keranjang
        </div>
        <Divider></Divider>
        <Button>
          <PlusSquareOutlined />
          <span className="pelanggan">Pelanggan</span>
        </Button>
        <img src="https://via.placeholder.com/250" alt=""/>
      </div>
    )
  }
}

export default RightSideBar
