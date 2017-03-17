const React = require('react')
const { connect } = require('react-redux')

const AppBar = require('material-ui/AppBar').default
const IconButton = require('material-ui/IconButton').default
const Headset = require('material-ui/svg-icons/hardware/headset').default
const ViewList = require('material-ui/svg-icons/action/view-list').default

const Landing = ({ openMainMenu, openPlaylistMenu }) => {
  return (
    <div id="landing">
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
      <div className="header">
        Stream music. <span className="emphasis">Together.</span>
      </div>
    </div>
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

module.exports = connect(null, mapDispatch)(Landing)
