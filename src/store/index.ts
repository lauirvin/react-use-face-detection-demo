import { applyMiddleware, combineReducers, createStore, Middleware, StoreEnhancer } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import Config from '../Config';
import userDetails, { UserDetailsState } from './userDetails/reducer';

export const rootReducer = combineReducers({
  userDetails,
});

export interface RootState {
  userDetails: UserDetailsState;
}

const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
  if (Config.nodeEnv === 'development') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export const store = createStore(rootReducer, bindMiddleware([thunkMiddleware]));

export default rootReducer;
