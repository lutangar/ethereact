import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './Component/App';
import HomeContainer from './Container/HomeContainer';
import NotFound from './Component/Page/NotFound';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomeContainer} />
    <Route path="404" status={404} component={NotFound} />
  </Route>
);
