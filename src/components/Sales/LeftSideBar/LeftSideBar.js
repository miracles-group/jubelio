import React, { Component } from 'react'
import { Layout, Menu } from 'antd'
import './style.scss'

const { Sider } = Layout;

export class LeftSidebBar extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <div className="leftSideBar">
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <Menu mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
      </div>
    )
  }
}

export default LeftSidebBar

