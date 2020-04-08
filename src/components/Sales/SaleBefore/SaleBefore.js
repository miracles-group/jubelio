import React, { Component } from 'react'
import HeaderInfoSection from '../HeaderInfoSection/HeaderInfoSection'
import LeftSideBar from '../LeftSideBar/LeftSideBar'
import RightSideBar from '../RightSideBar/RightSideBar'
import { Input, Button } from 'antd'
import { Divider } from 'antd'
import SaleBeforeItemList from '../SaleBeforeItemList/SaleBeforeItemList'
import './style.scss'

const { Search } = Input;

export class SaleBefore extends Component {
  render() {
    return (
      <div className="saleBefore">
        <HeaderInfoSection />
        <div className="saleBeforeSection">
          <LeftSideBar />
          <div className="saleBeforeContent">
            <Search
              placeholder="input search text"
              onSearch={value => console.log(value)}
            />
            <SaleBeforeItemList />464 131
            <div className="saleItemConfirm">
              <div className="header">
                <Button>Batal</Button>
                <span>Kas Pembukkan</span>
                <Button>Simpan</Button>
              </div>
              <Divider></Divider>
              <div className="price">
                <span>Rp</span>
                <span>275.000</span>
              </div>
            </div>
          </div>
          <RightSideBar />
        </div>
      </div>
    )
  }
}

export default SaleBefore
