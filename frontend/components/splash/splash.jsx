import React from 'react';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    const demo = {username:"demo", password:"password"};
    this.props.processForm(demo);
  }
  

  render() {
    return(
    <>  
      <form className="splash-page" onSubmit={this.handleSubmit} >
          <h1 className="splash-header">Find Your Dreams</h1>
          <h3 className="splash-h3">Join the Dreamers community, home to a place where people share their Dreams.</h3>
          <button className="demo-button" >demo</button>
      </form>
      <div className="slide-background"></div>
    </>)
  };


};

export default Splash;
