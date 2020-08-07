import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import View1 from './pages/View1';
import View2 from './pages/View2';
import View3 from './pages/View3'
import { Provider } from 'react-redux';
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={View1} />
          <Route exact path='/view2' component={View2} />
          <Route exact path='/view3' component={View3} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
