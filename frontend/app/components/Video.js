import React from 'react';
import api from '../utils/api';
import corgi_video from '../media/corgiVideo.mp4';

class Video extends React.Component {
  constructor(props) {
    super();
    this.state = {
      joke: 'null'
    };
  }

 componentDidMount() {
    this.getJoke();
  }

  getJoke() {
    return api.fetchRandomJoke().then((data) => {
      this.setState({ joke: data });
    });
  }

  render() {
    return (
      <div className='home-container'>
        <h2> {this.state.joke} </h2>
        <video width="320" height="240" controls>
          <source src={corgi_video} type="video/mp4"/>
        Your browser does not support the video tag.
        </video>
      </div>
    )
  }
}

module.exports = Video;
