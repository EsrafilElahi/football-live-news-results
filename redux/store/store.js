import { createStore, compose, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './../reducer/index';


export const store = createStore(rootReducer,
    composeWithDevTools(
        compose(applyMiddleware(thunk) )
    )
)

store.subscribe(() => console.log(store.getState()))

