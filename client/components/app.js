const React = require('react')
const { BrowserRouter: Router, Route, Link } = require('react-router-dom')
const { connect } = require('react-redux')

const Landing = require('./landing.js')

const AppBar = require('material-ui/AppBar').default
const IconButton = require('material-ui/IconButton').default
const Headset = require('material-ui/svg-icons/hardware/headset').default
const ViewList = require('material-ui/svg-icons/action/view-list').default

const App = ({ openMainMenu, openPlaylistMenu }) => {
  return (
    <Router>
      <div id="app">
        <AppBar
          className="top-menu-bar"
          title="Impulse"
          iconElementLeft={
            <IconButton className="icon-button">
              <Headset/>
            </IconButton>
          }
          onLeftIconButtonTouchTap={ openMainMenu }
        />
        <AppBar
          className="bottom-menu-bar"
          iconElementLeft={
            <IconButton className="icon-button">
              <ViewList/>
            </IconButton>
          }
          onLeftIconButtonTouchTap={ openPlaylistMenu }
        />

        <Route exact path="/" component={ Landing }/>
      </div>
    </Router>
  )
}

const mapDispatch = dispatch => {
  return {
    openMainMenu: (event) => {
      console.log('opening main menu')
    },
    openPlaylistMenu: (event) => {
      console.log('opening playlist menu')
    }
  }
}

module.exports = connect(null, mapDispatch)(App)
