import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'
import reducers from './reducers'
import indexRouter from './landingPage/indexRouter'
import reduxThunk from 'redux-thunk'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)

const appStore = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const theme = {
  mobileOneColumnWidth:'450px'
}

ReactDOM.render(
  <Provider store={appStore}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={indexRouter}/>
          </Switch>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>, document.querySelector('.container'))
