import axios from 'axios';

module.exports = {
  fetchRandomJoke: function () {
    var encodedURI = window.encodeURI('http://api.icndb.com/jokes/random');
    // return { "type": "success", "value": { "id": 184, "joke": "If at first you don't succeed, you're not Chuck Norris.", "categories": [] } }
    return axios.get(encodedURI)
      .then(function (response) {
        return response.data.value.joke;
      });
  }
};
