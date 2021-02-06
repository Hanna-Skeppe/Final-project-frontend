import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { producers } from './reducers/producers'
import { user } from './reducers/user'
import { ui } from './reducers/ui'
import { wines } from './reducers/wines'
import { NavbarMain } from './components/NavbarMain'
import { Home } from './pages/Home'
import { ProducersPage } from './pages/ProducersPage'
import { UserPage } from './pages/UserPage'
import { RegistrationPage } from './pages/RegistrationPage'

const reducer = combineReducers({
  wines: wines.reducer,
  producers: producers.reducer,
  user: user.reducer,
  ui: ui.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    /*
      <Route path="/producers/:id/wines" exact component={SingleProducerPage} />
     */
    <Provider store={store}>
      <BrowserRouter>
        <NavbarMain />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={RegistrationPage} />
          <Route path="/producers" component={ProducersPage} />
          <Route path="/users/:id/collection" component={UserPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}
