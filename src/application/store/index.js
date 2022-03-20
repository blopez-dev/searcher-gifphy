import { applyMiddleware, createStore as createReduxStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export const createStore = (initialState) => (
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);
