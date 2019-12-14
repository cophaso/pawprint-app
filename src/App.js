import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import LandingPage from './routes/Landing/LandingPage';
import LoginPage from './routes/Login/LoginPage';
import SignupPage from './routes/Signup/SignupPage'
import HomePage from './routes/HomePage/HomePage';
import UsersPupsPage from './routes/UsersPups/UsersPupsPage';
import PupservationPage from './routes/PupservationPage/pupservationPage';

class App extends Component {
  render(){
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
            <Route path={'/signup'} component={SignupPage} />
            <Route path={'/home'} component={HomePage} />
            <Route path={'/pupservations'} component={PupservationPage} />
            <Route path={'/yourpups'} component={UsersPupsPage} />
          </Switch>
        </main>
      </div>
    )
  };
}

export default App;
