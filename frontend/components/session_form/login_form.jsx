import React from 'react';
import { BsCloudFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <>
        <div className="session-form-container">
            <form onSubmit={this.handleSubmit} className="session-form-box">
              < BsCloudFill size="30" className="cloud-sessiom" />
              <h4 className="session-title">Welcome to Dreamer</h4>
              <br/>
              {this.renderErrors()}
              <div className="session-form">
                <br/>
                <label className="Username">
                  <input type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                    className="session-input"
                    placeholder="Username"
                  />
                </label>
                <br/>
                <label className="Password">
                  <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="session-input"
                    placeholder="Password"
                  />
                </label>
                <br/>
                <input className="session-submit" type="submit" value={this.props.formType} />
              </div>
              <div className="line"/>
              <div className="sign-up-link">Not a Dreamer member? &nbsp;<Link to="/signup" >Sign up here.</Link> </div>
            </form>
        </div>
        <div className="session-bg"></div>
      </>
    );
  }
}

export default Login;
