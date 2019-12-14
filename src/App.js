import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import LandingPage from './routes/Landing/LandingPage';
import LoginPage from './routes/Login/LoginPage';
import HomePage from './routes/HomePage/HomePage';
import UsersPupsPage from './routes/UsersPups/UsersPupsPage';

import DATA from './userData';

class App extends Component {
  render(){
    const pups = DATA.users[0].usersPups;

    return (
      <div className="App">
        <header className="App-header">
        </header>
        <main className='App-main'>
          <Switch>
            <Route
              exact
              path={'/'}
              component={LandingPage}
            />
            <Route path={'/login'} component={LoginPage} />
            <Route path={'/home'} component={HomePage} />
            <Route path={'/yourpups'} render={() => <UsersPupsPage pups={pups} />} />
          </Switch>
        </main>
      </div>
    )
  };
}

export default App;
