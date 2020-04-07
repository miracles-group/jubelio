import React from 'react';
import PropTypes from 'prop-types';
import '../../../assets/fontawesome/css/fontawesome.min.css';
import '../../../assets/bootstrap.min.css';
import Logo from '../../../assets/moon.png';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './style.scss';

const Register = (props) => {
  const options = ['one', 'two', 'three', 'four', 'five'];
  const defaultOption = options[0];
  return (
    <div>
      <div className="register-header">
        <div className="register__logo">
          <img className="register__logo-img" src={Logo} alt="" />
          <div className="register__logo-title">Kasir</div>
        </div>
        <div className="register__address">
          <Dropdown
            controlClassName="register__dropdown"
            placeholderClassName="register__dropdown__item"
            arrowClassName="register__dropdown__arrow"
            options={options}
            // onChange={this._onSelect}
            value={defaultOption}
            placeholder="Select an option"
          ></Dropdown>
        </div>
        <div className="register__group-btn">
          <button className="register__screen-btn">
            <i className="fa fa-arrows-alt" aria-hidden="true"></i>
          </button>
          <button className="register__logout-btn">
            <i className="fa fa-power-off" aria-hidden="true"></i>
            Logout
          </button>
        </div>
      </div>
      <div className="register-main">
        <div className="register-main__wrap row">
          <div className="register__account col-3">
            <div className="register__account-card">
              <div className="register__account-b1">
                <img className="register__account-img" src={Logo} alt=""></img>
                <p>Dika Susanto</p>
              </div>
              <div className="register__account-b2">
                <div className="register__account-email">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <span>dika.susanto@gmail.com</span>
                </div>
                <div className="register__account-title">
                  Aktivitas Terakhir
                </div>
              </div>
              <div className="register__account-b3">
                <div className="register__account-code">
                  <i className="fa fa-calculator" aria-hidden="true"></i>
                  EPSON GD2250
                </div>
                <div className="register__account-address">
                  <i className="fa fa-home" aria-hidden="true"></i>Grand
                  Indonesia
                </div>
                <div className="register__account-time">
                  <i className="fa fa-clock-o" aria-hidden="true"></i>
                  2020-03-12 13:26 PM
                </div>
              </div>
            </div>
          </div>
          <div className="register__content col-9">
            <div className="register__lits row">
              {options.map(() => (
                <div className="register__items col-3">
                  <div className="register__items-wrap ">
                    <div className="register__items-top ">
                      <div className="register__items-right ">
                        <input type="checkbox"></input>
                      </div>
                      <div className="register__items-left ">open</div>
                    </div>
                    <p className="register__items-code">EPSON GD2250</p>
                    <p className="register__items-time"> 2020-03-12 13:26 PM</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Register.propTypes = {};

export default Register;
