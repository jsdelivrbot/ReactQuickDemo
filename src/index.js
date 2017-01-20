import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import JsxDemo from './app/components/jsx-demo/app';
import ComponentDemo from './app/components/component-demo/app'
import RouterDemo from './app/components/router-demo/app'
import BaseComp from './app/components/router-demo/base-component'
import {WithParams, WithOptionalParams, QueryParam} from './app/components/router-demo/with-params-component'

// ReactDOM.render(
//   <ComponentDemo/>
//   , document.querySelector('.container'));

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={RouterDemo}>
      <IndexRoute component={BaseComp} />
      <Route path="base" component={BaseComp}/>
      <Route path="withParam/:someParam" component={WithParams} />
      <Route path="optionalParam/:someParam(/:optionalParam)" component={WithOptionalParams} />
      <Route path="queryParam" component={QueryParam}/>
    </Route>

  </Router>
  , document.querySelector('.container'));
