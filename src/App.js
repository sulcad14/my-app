import React from 'react';
import './App.css';
import { AppBar, Dashboard } from './components';
import Theme from './Theme';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core/';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { About, NotFound, Skills } from './models';

function App() 
{
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={Theme}>
          <CssBaseline />
            <div className="App">
              <AppBar />
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/about" component={About} />
                <Route exact path="/skills" component={Skills} />
                <Route path="" component={NotFound} />
              </Switch>
            </div>
      </MuiThemeProvider> 
    </BrowserRouter>
  );
}

export default App;
