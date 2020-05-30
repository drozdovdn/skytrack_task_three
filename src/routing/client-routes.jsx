import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';

import Main from './../pages/main';
import History from './../pages/history';

export default function ClientRoutes() {
  return (
    <>
      <Switch>
        <Route path="/" exact={true} component={ Main }/>
        <Route path="/history" exact={true} component={ History }/>
        <Redirect to="/"/>
      </Switch>
    </>
  );
};