const { createStore, combineReducers, applyMiddleware } = require('redux')
const thunk = require('redux-thunk').default
const { mainView } = require('../reducers/reducers')

const reducer = combineReducers({ mainView })

module.exports = createStore(reducer, {}, applyMiddleware(thunk))
