const React = require('react')
const { connect } = require('react-redux')

const Landing = require('./landing')

const MainView = ({ view }) => {
  switch (view) {
    case 'landing':
      return <Landing />
    default:
      return null
  }
}

const mapProps = state => {
  return {
    mainView: state.mainView
  }
}

module.exports = connect(mapProps)(MainView)
