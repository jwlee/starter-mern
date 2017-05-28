import React from 'react';
import {Link} from 'react-router-dom';
import corgi_img from '../media/corgi.jpg'

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
        <img src={corgi_img} />
        <Link className='button' to='/video'>Watch Video</Link>
      </div>
    )
  }
}

module.exports = Home;
