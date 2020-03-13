import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/**
 * Redux imports
 */

import { applyMiddleware, compose, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import creatSagaMiddleware from 'redux-saga';
import allReducers from './services/reducers';
import allSagas from './services/sagas';
/**
 * Components
 */
import NavigationBar from './component/NavigationBar';
import Home from './component/Home';
import Contact from './component/sections/Contact';
import NoMatch from './component/sections/NoMatch';
import About from './component/sections/About';

/**
 * redux implementation
 */
const loggerMiddleware = createLogger({ predicate: () => false })
const persistedReducer = persistReducer({ key: 'root', storage, blacklist: ['filter', 'modals'] }, allReducers)

function configureStore(initialState) {
  const sagaMiddleware = creatSagaMiddleware()
  const enhancer = compose(
    applyMiddleware(sagaMiddleware, loggerMiddleware)
  )
  let store = createStore(persistedReducer, initialState, enhancer)
  sagaMiddleware.run(allSagas)
  return store;
}

const initialState = {}
export const store = configureStore(initialState)
export const persistor = persistStore(store)

function App() {

  return (
    <React.Fragment>
      <Provider store={store}>
        <NavigationBar />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Provider>
    </React.Fragment>
  );
}

export default App;
