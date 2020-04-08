import React, { Component } from 'react'
import SaleBeforeItem from '../SaleBeforeItem/SaleBeforeItem'
import './style.scss'
export class SaleBeforeItemList extends Component {
  render() {
    return (
      <div className="saleBeforeItemList">
        <SaleBeforeItem /> 
        <SaleBeforeItem />
        <SaleBeforeItem />  
        <SaleBeforeItem />
        <SaleBeforeItem />
      </div>
    )
  }
}

export default SaleBeforeItemList

