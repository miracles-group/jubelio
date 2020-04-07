import React from 'react';
import '../../../assets/fontawesome/css/fontawesome.min.css';
import '../../../assets/bootstrap.min.css';
import 'react-dropdown/style.css';
import LogoTitle from '../../../assets/logo-pos.png';
import ImgLeft from '../../../assets/illustrasi-login-pos_1.png';
import './styled.scss';

const Login = (props) => {
  return (
    <div className="login">
      <div className="login__title">
        <img className="login__title-img" src={LogoTitle} alt="alt" />
      </div>
      <div className="login__content container">
        <div className="login__left col-7">
          <img className="login__left-img" src={ImgLeft} alt="alt" />
        </div>
        <div className="login__right col-5">
          <div className="login__form">
            <h1 className="login__form-title">Sign in to Jubelio POS</h1>
            <div className="login__form-text">Enter your details below.</div>
            <div className="login__form-input">
              <label htmlFor="email">Email</label>
              <input className="login__input" id="email" type="text" />
            </div>
            <div className="login__form-input">
              <div className="login__form-lable">
                <label htmlFor="password">Password</label>
                <div className="login__form__forgot">Forgot Password?</div>
              </div>
              <input className="login__input" id="password" type="password" />
            </div>
            <button className="login__form-button">SIGN IN</button>
            <div className="login__form__create">
              <div className="login__create-title">Dont have account?</div>
              <a href="/" className="login__create-btn">
                GET STARTED
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {};

export default Login;
