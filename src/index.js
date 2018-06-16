import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'
import rootreducers from './reducers'
import indexRouter from './landingPage/indexRouter'
import reduxThunk from 'redux-thunk'

import {fetchAllRealData} from './utils'

 ;(async() => {

  try {
     const dataObj = await fetchAllRealData()
   //  const dataObj = {records:[],q:'',total:0,errorMsg:''}

    console.log('init all locations data', dataObj)

    const initLocationState = {
      locationData:dataObj
    }

    const middleWareChain = [reduxThunk]
    const createStoreWithMiddleware = (rootReducerFromSrc, initLocationState,reduxDevtoolExtension) => applyMiddleware(...middleWareChain)(createStore)(rootReducerFromSrc, initLocationState, reduxDevtoolExtension)

    const appStore = createStoreWithMiddleware(rootreducers, initLocationState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

    const theme = {
      mobileOneColumnWidth: '570px',
      padWidth: '980px'
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

  } catch (err) {

    throw new Error(err)

  }

})()
