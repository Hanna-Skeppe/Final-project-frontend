import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { user } from './reducers/user'
import { NavbarMain } from './components/NavbarMain'
import { Home } from './pages/Home'
import { ProducersPage } from './pages/ProducersPage'

const reducer = combineReducers({
  // wines: wines.reducer,
  // producers: producers.reducer,
  user: user.reducer
  // ui: ui.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    /* <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={PopoverLogin} />
      <Route path="/register" exact component={Registration} />
      <Route path="/users/:id/collection" exact component={UserPage} />
      <Route path="/producers" exact component={ProducersPage} />
      <Route path="/producers/:id/wines" exact component={SingleProducerPage} />
    </Switch> */
    <Provider store={store}>
      <BrowserRouter>
        <NavbarMain />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/producers" exact component={ProducersPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}
