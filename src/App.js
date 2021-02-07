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
import { WinesFromSingleProducerPage } from './pages/WinesFromSingleProducerPage'
import { UserPage } from './pages/UserPage'
import { RegistrationPage } from './pages/RegistrationPage'
import { LoginPageMobile } from './pages/LoginPageMobile'

const reducer = combineReducers({
  wines: wines.reducer,
  producers: producers.reducer,
  user: user.reducer,
  ui: ui.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavbarMain />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" exact component={RegistrationPage} />
          <Route path="/login" exact component={LoginPageMobile} />
          <Route path="/producers" exact component={ProducersPage} />
          <Route path="/singleproducer/:id/wines" exact component={WinesFromSingleProducerPage} />
          <Route path="/users/:id/collection" exact component={UserPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}
