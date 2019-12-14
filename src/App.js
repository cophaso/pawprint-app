import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import LandingPage from './routes/Landing/LandingPage';
import LoginPage from './routes/Login/LoginPage';
import UsersPupsPage from './routes/UsersPups/UsersPupsPage';

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
            <Route path={'/yourpups'} component={UsersPupsPage} />
          </Switch>
        </main>
      </div>
    )
  };
}

export default App;
