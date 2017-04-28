const { createStore, combineReducers } = require('redux');
const rootReducer = require('./rootReducer');

const reducer = combineReducers(rootReducer);

module.exports = createStore(reducer, {});
