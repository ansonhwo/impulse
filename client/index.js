const React = require('react');
const ReactDOM = require('react-dom');
const { Provider } = require('react-redux');
const { Router, browserHistory } = require('react-router');
const routes = require('./router/routes');
const store = require('./store/store');
const MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default;

require('react-tap-event-plugin')();

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={ store }>
      <Router history={browserHistory} routes={routes} />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
