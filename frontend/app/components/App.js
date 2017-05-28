import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Video from './Video';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <Nav />

          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/video' component={Video} />
            <Route render={function () {
              return <p>Not Found</p>
            }} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

module.exports = App;
