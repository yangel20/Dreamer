import React from 'react';
import { BsCloudFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons/lib';

class SignupForm
 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
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

  componentWillUnmount(){
    this.props.clearErrors();
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li className="errors" key={`error-${i}`}>
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
            <div className="session-title">Sign up to view dreams</div>
            <br/>
            <div className="session-form">
              <br/>
              <label className="Email">
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="session-input"
                  placeholder="Email"
                />
              <br/>
                </label>
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
              {this.renderErrors()}
              <input className="session-submit" type="submit" value={this.props.formType} />
            </div>
            <div className="line"/>
            <div className="sign-up-link">Already a Dreamer member? &nbsp; <Link to="/login" >Log in here.</Link> </div>
          </form>
        </div>
        <div className="session-bg"></div>
      </>
    );
  }
}

export default SignupForm
;