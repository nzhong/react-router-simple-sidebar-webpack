var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router/lib/IndexRoute');
var createHashHistory = require('history/lib/createHashHistory');
var history = createHashHistory({
  queryKey: false
});

var NotFound = require('./notFound');
var OuterFrame = require('./outerFrame/outerFrame');
var MiscAbout = require('./misc/miscAbout');
var MiscWelcome = require('./misc/miscWelcome');


module.exports = (
    <Router history={history}>
      <Route path="/" component={OuterFrame}>
        <IndexRoute           component={MiscWelcome}/>
        <Route path="welcome" component={MiscWelcome} />
        <Route path="about"   component={MiscAbout} />
        <Route path="*"       component={NotFound}/>
      </Route>
      <Route path="*" component={NotFound}/>
    </Router>
)
