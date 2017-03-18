const React = require('react')
const { BrowserRouter: Router, Route, Link } = require('react-router-dom')

const Landing = require('./landing.js')

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={ Landing }/>
      </div>
    </Router>
  )
}

module.exports = App
