var React = require('react');
var Link = require('react-router-dom').Link;

class Home extends React.Component {
  render() {
    return (
      <div className='home-container'>
        <img src={require('../data/corgi.jpg')} />
        <Link className='button' to='/video'>Watch Video</Link>
      </div>
    )
  }
}

module.exports = Home;
