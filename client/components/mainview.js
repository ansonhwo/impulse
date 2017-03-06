const React = require('react')
const { connect } = require('react-redux')

const Landing = require('./landing')

const MainView = ({ mainView }) => {
  switch (mainView) {
    case 'landing':
      return <Landing />
    default:
      return null
  }
}

const mapState = state => {
  return {
    mainView: state.mainView
  }
}

module.exports = connect(mapState)(MainView)
