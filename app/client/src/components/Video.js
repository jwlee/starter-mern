var React = require('react');
var api = require('../utils/api');

class Video extends React.Component {
  constructor(props) {
    super();
    this.state = {
      joke: 'null'
    };

    // use api to get a joke
    api.fetchRandomJoke()
      .then(function (joke) {
        this.setState(function () {
          return {
            joke: joke
          }
        });
    }.bind(this));
  }

  render() {
    return (
      <div className='home-container'>
        <h2> {this.state.joke} </h2>
        <video width="320" height="240" controls>
          <source src={require('../data/corgiVideo.mp4')} type="video/mp4"/>
        Your browser does not support the video tag.
        </video>
      </div>
    )
  }
}

module.exports = Video;
