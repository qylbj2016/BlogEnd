import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import createSagaMiddleWare from 'redux-saga'
import rootSaga from './sagas'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const sagaMiddleWare = createSagaMiddleWare()

const store = createStore(
    reducer,
    composeEnhancers( applyMiddleware( sagaMiddleWare ) )
)

sagaMiddleWare.run( rootSaga )

export default store;