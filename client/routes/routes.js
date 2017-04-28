const React = require('react');
const { connect } = require('react-redux');
const { Route, IndexRoute, IndexRedirect } = require('react-router');
const App = require('../app');

const routes = () => {
  return (
    <Router>
      <Route path="/" component={App} />
    </Router>
  );
};

module.exports = routes;
