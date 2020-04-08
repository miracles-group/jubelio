import React, { Component } from 'react'
import './style.scss'
export class HeaderInfoSection extends Component {
  render() {
    return (
      <div className="headerInfoSection">
        <div className="jubelioPos headerInfoItem">
          Jubelio POS
        </div>
        <div className="grand headerInfoItem">
          Grand Indonesia - EPSON 1213
        </div>
        <div className="wifi headerInfoItem">
          <i className="fas fa-wifi"></i>
        </div>
        <div className="expand headerInfoItem">
          <i className="fas fa-expand-alt"></i>
        </div>
        <div className="shoppingCart headerInfoItem">
          <i className="fas fa-shopping-cart"></i>
        </div>
        <div className="notificationBell headerInfoItem">
          <i className="fas fa-bell"></i>
        </div>
        <div className="profile headerInfoItem">
          <i className="fas fa-user"></i>
          <span className="userName">Manh Quan</span>
        </div>
      </div>
    )
  }
}

export default HeaderInfoSection
