import React, { Component } from 'react'
import './style.scss'
export class SaleBeforeItem extends Component {
  render() {
    return (
      <div className="saleBeforeItem">
        <img src="https://via.placeholder.com/120" alt=""/>
        <div className="saleBeforeItemInfo">
          <span className="itemName">
            Boast Navy Dreas
          </span>
          <span className="itemPrice">
            Rp. 275.000,00
          </span>
        </div>
      </div>
    )
  }
}

export default SaleBeforeItem
