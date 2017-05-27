import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      title: 'Welcome to starter'
    };
  }

  render() {
    return (
      <div className='home-container'>
      	<h1>{this.state.title}</h1>
        <img src={require('../data/corgi.jpg')} />
        <Link className='button' to='/video'>Watch Video</Link>
      </div>
    )
  }
}

module.exports = Home;
