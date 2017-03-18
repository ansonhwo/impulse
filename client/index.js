const App = require('./components/app')
const React = require('react')
const ReactDOM = require('react-dom')
const store = require('./store/store')

const { Provider } = require('react-redux')
const MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default
require('react-tap-event-plugin')()

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={ store }>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
)
