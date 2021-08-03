import React, { Suspense } from 'react';
import './App.css';

import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Layout from './components/layout/index'

function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact render={() => {
            return <Redirect to="/home/index" />
          }} />
          <Route path={["/home", "/example"]} component={Layout} />
          <Route path='*' render={() => {
            return <Redirect to="/home/index" />
          }} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );

}

export default App;