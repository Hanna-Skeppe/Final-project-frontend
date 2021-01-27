import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { NavbarMain } from './components/NavbarMain'

const reducer = combineReducers({
  wines: wines.reducer,
  producers: producers.reducer,
  users: users.reducer,
  ui: ui.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavbarMain />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={PopoverLogin} />
          <Route path="/register" exact component={Registration} />
          <Route path="/users/:id/collection" exact component={UserPage} />
          <Route path="/producers" exact component={ProducersPage} />
          <Route path="/producers/:id/wines" exact component={SingleProducerPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
    // <div>
    //   Find me in src/app.js!
    // </div>
  )
}
