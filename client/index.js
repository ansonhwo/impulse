const App = require('./components/app')
const React = require('react')
const ReactDOM = require('react-dom')
const store = require('./store/store')

const { Provider } = require('react-redux')
const { default: MuiThemeProvider } = require('material-ui/styles/MuiThemeProvider')
require('react-tap-event-plugin')()

ReactDOM.render(
  <Provider store={ store }>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
)
