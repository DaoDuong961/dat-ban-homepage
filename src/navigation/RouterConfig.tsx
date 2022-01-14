import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import { ROOT } from './CONSTANT';

interface Props {}

const RouterConfig = (props: Props) => {
  return (
    <div>
      <Switch>
        {/* List all public routes here */}
        <Route exact path={ROOT} component={HomePage} />

        {/* List all private/auth routes here */}

        {/* List a generic 404-Not Found route here */}
        <Route path="*">
          {/* for not found */}
        </Route>
      </Switch>
    </div>
  );
};

export default RouterConfig;
