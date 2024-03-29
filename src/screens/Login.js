import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { setToken } from '../utils/authManager';

export class Login extends Component {
  state = {
    username: '',
    password: '',
    loading: false,
    redirectToReferer: false
  };

  onUsernameChange = event => {
    this.setState({ username: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = event => {
    this.setState({ loading: true });
    event.preventDefault();
    this.setState({ username: '', password: '' });
    fetch('', {
      method: 'POST',
      body: JSON.stringify({
        user: this.state.username,
        pass: this.state.password
      })
    })
      .then(response => response.json())
      .then(data => {
        setToken(data.token);
        this.setState({ redirectToReferer: true });
      })
      .catch(err => console.error(err))
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  render() {
    const from = (this.props.location.state &&
      this.props.location.state.from) || { pathname: '/' };
    console.log(this.props.location.state);
    if (this.state.redirectToReferer) return <Redirect to={from} />;

    return (
      <div id="wrapper">
        <div className="compare-slide-menu">
          <div className="csm-trigger" />

          <div className="csm-content">
            <h4>
              <div className="csm-mobile-trigger" />
            </h4>

            <div className="csm-properties">
              <div className="listing-item compact">
                <a
                  href="single-property-page-2.html"
                  className="listing-img-container">
                  <div className="remove-from-compare">
                    <i className="fa fa-close" />
                  </div>
                  <div className="listing-badges">
                    <span></span>
                  </div>
                  <div className="listing-img-content">
                    <span className="listing-compact-title">
                      E
                    </span>
                  </div>
                  <img src="images/listing-01.jpg" alt="" />
                </a>
              </div>

              <div className="listing-item compact">
                <a
                  href="single-property-page-2.html"
                  className="listing-img-container">
                  <div className="remove-from-compare">
                    <i className="fa fa-close" />
                  </div>
                  <div className="listing-badges">
                    <span></span>
                  </div>
                  <div className="listing-img-content">
                    <span className="listing-compact-title">
                     
                    </span>
                  </div>
                  <img src="images/listing-03.jpg" alt="" />
                </a>
              </div>

              <div className="listing-item compact">
                <a
                  href="single-property-page-2.html"
                  className="listing-img-container">
                  <div className="remove-from-compare">
                    <i className="fa fa-close" />
                  </div>
                  <div className="listing-badges">
                    <span></span>
                  </div>
                  <div className="listing-img-content">
                    <span className="listing-compact-title">
                      Oak Tree Villas <i>$535,000</i>
                    </span>
                  </div>
                  <img src="images/listing-05.jpg" alt="" />
                </a>
              </div>
            </div>

            <div className="csm-buttons">
              <a href="compare-properties.html" className="button">
                Compare
              </a>
              <a href="#" className="button reset">
                Reset
              </a>
            </div>
          </div>
        </div>

        <div className="clearfix" />

        <div id="titlebar">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>Log In & Register</h2>

                <nav id="breadcrumbs">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>Log In & Register</li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              <div className="my-account style-1 margin-top-5 margin-bottom-40">
                <ul className="tabs-nav">
                  <li className="">
                    <a href="#tab1">Log In</a>
                  </li>
                  <li>
                    <a href="#tab2">Register</a>
                  </li>
                </ul>

                <div className="tabs-container alt">
                  <div className="tab-content" id="tab1">
                    <form onSubmit={this.handleSubmit} className="login">
                      <p className="form-row form-row-wide">
                        <label for="username">
                          Username:
                          <i className="im im-icon-Male" />
                          <input
                            type="text"
                            className="input-text"
                            name="username"
                            id="username"
                            value={this.state.username}
                            onChange={this.onUsernameChange}
                          />
                        </label>
                      </p>

                      <p className="form-row form-row-wide">
                        <label for="password">
                          Password:
                          <i className="im im-icon-Lock-2" />
                          <input
                            className="input-text"
                            type="password"
                            name="password"
                            id="password"
                            value={this.state.password}
                            onChange={this.onPasswordChange}
                          />
                        </label>
                      </p>

                      <p className="form-row">
                        <input
                          type="submit"
                          className="button border margin-top-10"
                          name="login"
                          value="Login"
                        />

                        <label for="rememberme" className="rememberme">
                          <input
                            name="rememberme"
                            type="checkbox"
                            id="rememberme"
                            value="forever"
                          />{' '}
                          Remember Me
                        </label>
                      </p>

                      <p className="lost_password">
                        <a href="#">Lost Your Password?</a>
                      </p>
                    </form>
                  </div>

                  <div
                    className="tab-content"
                    id="tab2"
                    style={{ display: 'none' }}>
                    <form method="post" className="register">
                      <p className="form-row form-row-wide">
                        <label for="password1">
                          Password:
                          <i className="im im-icon-Lock-2" />
                          <input
                            className="input-text"
                            type="password"
                            name="password1"
                            id="password1"
                          />
                        </label>
                      </p>

                      <p className="form-row form-row-wide">
                        <label for="password2">
                          Repeat Password:
                          <i className="im im-icon-Lock-2" />
                          <input
                            className="input-text"
                            type="password"
                            name="password2"
                            id="password2"
                          />
                        </label>
                      </p>

                      <p className="form-row">
                        <input
                          type="submit"
                          className="button border fw margin-top-10"
                          name="register"
                          value="Register"
                        />
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="margin-top-55" />

        

        <div id="backtotop">
          <a href="#" />
        </div>

        <div id="style-switcher">
          <h2>
            Color Switcher{' '}
            <a href="#">
              <i className="sl sl-icon-settings" />
            </a>
          </h2>

          <div>
            <ul className="colors" id="color1">
              <li>
                <a href="#" className="blue" title="Blue" />
              </li>
              <li>
                <a href="#" className="green" title="Green" />
              </li>
              <li>
                <a href="#" className="orange" title="Orange" />
              </li>
              <li>
                <a href="#" className="navy" title="Navy" />
              </li>
              <li>
                <a href="#" className="yellow" title="Yellow" />
              </li>
              <li>
                <a href="#" className="peach" title="Peach" />
              </li>
              <li>
                <a href="#" className="beige" title="Beige" />
              </li>
              <li>
                <a href="#" className="purple" title="Purple" />
              </li>
              <li>
                <a href="#" className="celadon" title="Celadon" />
              </li>
              <li>
                <a href="#" className="pink" title="Pink" />
              </li>
              <li>
                <a href="#" className="red" title="Red" />
              </li>
              <li>
                <a href="#" className="brown" title="Brown" />
              </li>
              <li>
                <a href="#" className="cherry" title="Cherry" />
              </li>
              <li>
                <a href="#" className="cyan" title="Cyan" />
              </li>
              <li>
                <a href="#" className="gray" title="Gray" />
              </li>
              <li>
                <a href="#" className="olive" title="Olive" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
